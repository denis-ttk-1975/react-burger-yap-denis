import { Middleware } from 'redux';

import { getCookie } from '../../utils/getCookie';
import { checkResponse } from '../../utils/checkResponse';
import { getNewTokens } from '../../utils/getNewTokens';
import { postUrlUserTokenUpdate } from '../../utils/url';

import { RootState, TwsActions } from './../types/types';

export const websocketMiddleware = (wsActions: TwsActions): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsConnect, wsDisconnect, onConnect, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsConnect) {
        const { wsUrl, token } = payload;
        console.log('connect');
        let url = !!token ? `${wsUrl}?token=${token}` : `${wsUrl}`;

        socket = new WebSocket(url);
        isConnected = true;
        console.log('isConnected: ', isConnected);
      }

      if (type === wsDisconnect && socket) {
        console.log('disconnect');
        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        socket.close(1000);
        socket = null;
        dispatch(onClose());
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };

        socket.onerror = (event: { message: string; code: number | string }) => {
          console.log(event);
          console.log(`Ошибка ${event.message}`);
          console.log(`Код ошибки ${event.code}`);
          dispatch(onError('Произошла ошибка. Соединение будет закрыто и снова открыто.'));
          if (socket) {
            socket.close(4000);
          }
        };

        socket.onclose = (event) => {
          console.log('соединение закрылось!!!!!!');
          if (event.code !== 1000 && isConnected) {
            console.log('error', event);
            console.log('isConnected: ', isConnected);
            dispatch(onError(`Закрытие с ошибкой - код ${event.code.toString()}`));

            // reconnectTimer = window.setTimeout(() => {
            //   let accessToken = getCookie('accessToken');
            //   let url = !!token ? `${wsUrl}?token=${accessToken}` : `${wsUrl}`;
            //   console.log('url: ', url);
            //   dispatch(onConnect(url));
            //   console.log('Reconnection...');
            // }, 3000);
          }
          console.log('close');
          dispatch(onClose());
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(onMessage(parsedData));
          if (parsedData?.message === 'Invalid or missing token') {
            const refreshToken = getCookie('refreshToken');
            if (refreshToken) {
              getNewTokens(postUrlUserTokenUpdate, refreshToken, checkResponse);
              // reconnectTimer = window.setTimeout(() => {
              //   let accessToken = getCookie('accessToken');
              //   let url = !!token ? `${wsUrl}?token=${accessToken}` : `${wsUrl}`;
              //   console.log('url: ', url);
              //   dispatch(onClose());

              //   dispatch(onConnect(url));
              //   console.log('Reconnection...');
              // }, 3000);};
            }
          }
        };

        next(action);
      }
    };
  };
};

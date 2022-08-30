import { getCookie } from './../../utils/getCookie';
import { setCookie } from './../../utils/setCookie';
import { checkResponse } from './../../utils/checkResponse';
import { useSelector } from 'react-redux';
import { postUrlUserTokenUpdate } from './../../utils/url';

export const orderHistorySocketMiddleware = (wsActions) => {
  return (store) => {
    // const { data } = useSelector((state) => state.orderHistory);
    let socket = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';
    // let accessToken = getCookie('accessToken');

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsOrderHistoryConnect, wsOrderHistoryDisconnect, onConnect, onOpen, onClose, onError, onMessage } = wsActions;
      // console.log('я в ордер хистори вебсокет мидлваре');
      // console.log('payloadOH -', payload, 'accessToken -', accessToken);
      if (type === wsOrderHistoryConnect) {
        console.log('connect');
        let accessToken = getCookie('accessToken');
        url = `${payload}?token=${accessToken}`;
        socket = new WebSocket(url);
        isConnected = true;
        console.log('isConnected: ', isConnected);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };

        socket.onerror = (event) => {
          console.log(event);
          console.log(`Ошибка ${event.message}`);
          console.log(`Код ошибки ${event.code}`);
          dispatch(onError('Произошла ошибка. Соединение будет закрыто и снова открыто.'));
          socket.close(4000);
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          console.log('parsedData.success -', parsedData?.success, 'parsedData.message -', parsedData?.message, 'parsedData.orders -', parsedData?.orders);

          dispatch(onMessage(parsedData));
        };

        socket.onclose = (event) => {
          console.log('соединение закрылось!!!!!!');
          if (event.code !== 1000 && isConnected) {
            console.log('error', event);
            console.log('isConnected: ', isConnected);
            dispatch(onError(`Закрытие с ошибкой - код ${event.code.toString()}`));
            // if (data?.message === 'Invalid or missing token') {

            if (true) {
              (async () => {
                console.log('обновляю токен');
                try {
                  const res = await fetch(postUrlUserTokenUpdate, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      token: `${getCookie('refreshToken')}`,
                    }),
                  });

                  const fullResponse = await checkResponse(res);
                  // console.log('обновляю токен');
                  setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1], { path: '/' });
                  setCookie('refreshToken', fullResponse.refreshToken, { path: '/' });
                } catch (error) {
                  Promise.reject(error.message);
                }
              })();
              reconnectTimer = window.setTimeout(() => {
                let accessToken = getCookie('accessToken');
                url = `${payload}?token=${accessToken}`;
                dispatch(onConnect(url));
                console.log('Reconnection...');
              }, 3000);
            }
            console.log('close');
            dispatch(onClose());
          }
        };

        // if (type === wsSendMessage) {
        //   console.log('send');
        //   socket.send(JSON.stringify(action.payload));
        // }

        if (type === wsOrderHistoryDisconnect) {
          console.log('disconnect');
          clearTimeout(reconnectTimer);
          isConnected = false;
          reconnectTimer = 0;
          socket.close(1000);
          dispatch(onClose());
        }
      }

      next(action);
    };
  };
};

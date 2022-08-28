import { getCookie } from './../../utils/getCookie';

export const orderHistorySocketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';
    let accessToken = getCookie('accessToken');

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsOrderHistoryConnect, wsOrderHistoryDisconnect, onConnect, onOpen, onClose, onError, onMessage } = wsActions;
      // console.log('я в ордер хистори вебсокет мидлваре');
      console.log('payloadOH -', payload, 'accessToken -', accessToken);
      if (type === wsOrderHistoryConnect) {
        console.log('connect');
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
          dispatch(onMessage(parsedData));
        };

        socket.onclose = (event) => {
          console.log('соединение закрылось!!!!!!');
          if (event.code !== 1000 && isConnected) {
            console.log('error', event);
            console.log('isConnected: ', isConnected);
            dispatch(onError(`Закрытие с ошибкой - код ${event.code.toString()}`));
            reconnectTimer = window.setTimeout(() => {
              dispatch(onConnect(url));
              console.log('Reconnection...');
            }, 3000);
          }
          console.log('close');
          dispatch(onClose());

          // if (isConnected) {
          //   console.log('isConnected: ', isConnected);

          //   reconnectTimer = window.setTimeout(() => {
          //     dispatch(onConnect(url));
          //   }, 3000);
          // }
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

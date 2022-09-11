export const feedPageSocketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsFeedConnect, wsFeedDisconnect, onConnect, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsFeedConnect) {
        url = payload;
        socket = new WebSocket(url);
        isConnected = true;
        console.log('socket.url', socket.url);
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
          if (event.code !== 1000 && isConnected) {
            console.log('error', event);
            dispatch(onError(`Закрытие с ошибкой - код ${event.code.toString()}`));
            reconnectTimer = window.setTimeout(() => {
              dispatch(onConnect(url));
            }, 3000);
          }
          dispatch(onClose());
        };

        // if (type === wsSendMessage) {
        //   console.log('send');
        //   socket.send(JSON.stringify(action.payload));
        // }

        if (type === wsFeedDisconnect) {
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

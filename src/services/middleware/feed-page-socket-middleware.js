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
      // console.log('я в фиид пейдж вебсокет мидлваре');
      // console.log('payloadFD -', payload);
      if (type === wsFeedConnect) {
        // console.log('connect');
        url = payload;
        socket = new WebSocket(url);
        isConnected = true;
        // console.log('isConnected: ', isConnected);
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
          // console.log('соединение закрылось!!!!!!');
          if (event.code !== 1000 && isConnected) {
            console.log('error', event);
            // console.log('isConnected: ', isConnected);
            dispatch(onError(`Закрытие с ошибкой - код ${event.code.toString()}`));
            reconnectTimer = window.setTimeout(() => {
              dispatch(onConnect(url));
              // console.log('Reconnection...');
            }, 3000);
          }
          // console.log('close');
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

        if (type === wsFeedDisconnect) {
          // console.log('disconnect');
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

export const ORDER_HISTORY_CONNECT = 'ORDER_HISTORY_CONNECT';
export const ORDER_HISTORY_DISCONNECT = 'ORDER_HISTORY_DISCONNECT';

export const ORDER_HISTORY_WS_OPEN = 'ORDER_HISTORY_WS_OPEN';
export const ORDER_HISTORY_WS_CLOSE = 'ORDER_HISTORY_WS_CLOSE';
export const ORDER_HISTORY_WS_MESSAGE = 'ORDER_HISTORY_WS_MESSAGE';
export const ORDER_HISTORY_WS_ERROR = 'ORDER_HISTORY_WS_ERROR';

export const wsOrderHistoryConnect = (url) => ({ type: ORDER_HISTORY_CONNECT, payload: url });
export const wsOrderHistoryDisconnect = () => ({ type: ORDER_HISTORY_DISCONNECT });

export const wsOrderHistoryOpen = () => ({ type: ORDER_HISTORY_WS_OPEN });
export const wsOrderHistoryClose = () => ({ type: ORDER_HISTORY_WS_CLOSE });
export const wsOrderHistoryMessage = (data) => ({ type: ORDER_HISTORY_WS_MESSAGE, payload: data });
export const wsOrderHistoryError = (error) => ({ type: ORDER_HISTORY_WS_ERROR, payload: error });

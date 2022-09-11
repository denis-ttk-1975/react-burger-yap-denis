export const CONNECT = 'CONNECT';
export const DISCONNECT = 'DISCONNECT';

export const WS_OPEN = 'WS_OPEN';
export const WS_CLOSE = 'WS_CLOSE';
export const WS_MESSAGE = 'WS_MESSAGE';
export const WS_ERROR = 'WS_ERROR';

export const wsConnect = (wsUrl, token) => ({ type: CONNECT, payload: { wsUrl: wsUrl, token: token } });
export const wsDisconnect = () => ({ type: DISCONNECT });

export const wsOpen = () => ({ type: WS_OPEN });
export const wsClose = () => ({ type: WS_CLOSE });
export const wsMessage = (data) => ({ type: WS_MESSAGE, payload: data });
export const wsError = (error) => ({ type: WS_ERROR, payload: error });

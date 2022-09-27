export const CONNECT: 'CONNECT' = 'CONNECT';
export const DISCONNECT: 'DISCONNECT' = 'DISCONNECT';

export const WS_OPEN: 'WS_OPEN' = 'WS_OPEN';
export const WS_CLOSE: 'WS_CLOSE' = 'WS_CLOSE';
export const WS_MESSAGE: 'WS_MESSAGE' = 'WS_MESSAGE';
export const WS_ERROR: 'WS_ERROR' = 'WS_ERROR';

export type TwsConnect = {
  readonly type: typeof CONNECT;
  readonly payload: { wsUrl: string; token: string };
};

export type TwsDisconnect = {
  readonly type: typeof DISCONNECT;
};

export type TwsOpen = {
  readonly type: typeof WS_OPEN;
};

export type TwsClose = {
  readonly type: typeof WS_CLOSE;
};

export type TwsMessage = {
  readonly type: typeof WS_MESSAGE;
  readonly payload: { message: any };
};

export type TwsError = {
  readonly type: typeof WS_ERROR;
  readonly payload: { error: string };
};

export const wsConnect = (wsUrl: string, token: string) => ({ type: CONNECT, payload: { wsUrl: wsUrl, token: token } });
export const wsDisconnect = () => ({ type: DISCONNECT });

export const wsOpen = () => ({ type: WS_OPEN });
export const wsClose = () => ({ type: WS_CLOSE });
export const wsMessage = (data: any) => ({ type: WS_MESSAGE, payload: data });
export const wsError = (error: string) => ({ type: WS_ERROR, payload: error });

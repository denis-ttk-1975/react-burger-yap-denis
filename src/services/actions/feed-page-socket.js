export const FEED_CONNECT = 'FEED_CONNECT';
export const FEED_DISCONNECT = 'FEED_DISCONNECT';

export const FEED_WS_OPEN = 'FEED_WS_OPEN';
export const FEED_WS_CLOSE = 'FEED_WS_CLOSE';
export const FEED_WS_MESSAGE = 'FEED_WS_MESSAGE';
export const FEED_WS_ERROR = 'FEED_WS_ERROR';

export const wsFeedConnect = (url) => ({ type: FEED_CONNECT, payload: url });
export const wsFeedDisconnect = () => ({ type: FEED_DISCONNECT });

export const wsFeedOpen = () => ({ type: FEED_WS_OPEN });
export const wsFeedClose = () => ({ type: FEED_WS_CLOSE });
export const wsFeedMessage = (data) => ({ type: FEED_WS_MESSAGE, payload: data });
export const wsFeedError = (error) => ({ type: FEED_WS_ERROR, payload: error });

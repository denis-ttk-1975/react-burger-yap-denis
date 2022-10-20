import { setCookie } from './setCookie';
import { getCookie } from './getCookie';

import { postUrlUserTokenUpdate } from './url';

import { getNewTokens } from './getNewTokens';

export const fetchWithCheckJwt = async (url: string, options: { method: string; headers: {}; body?: string }, checkResponsePromise: (res: Response) => void, refreshToken: string): Promise<any> => {
  try {
    const res = await fetch(url, options);
    const result = await checkResponsePromise(res);

    return result;
  } catch (err: any) {
    if (err.message === 'jwt expired' || err.message === 'invalid token' || err.message === 'jwt malformed' || err.message === 'Token is invalid') {
      await getNewTokens(postUrlUserTokenUpdate, refreshToken, checkResponsePromise);

      const res = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      });

      const result = await checkResponsePromise(res);

      return result;
    } else {
      return Promise.reject(err);
    }
  }
};

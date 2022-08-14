import { setCookie } from './setCookie';
import { getCookie } from './getCookie';

import { postUrlUserTokenUpdate } from './url';

export const fetchWithCheckJwt = async (url, options, checkResponsePromise, refreshToken) => {
  try {
    const res = await fetch(url, options);
    await checkResponsePromise(res);

    return res;
  } catch (err) {
    if (err.message === 'jwt expired') {
      try {
        const res = await fetch(postUrlUserTokenUpdate, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: `${refreshToken}`,
          }),
        });
        await checkResponsePromise(res);
        const fullResponse = await res.json();

        setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', fullResponse.refreshToken);
      } catch (error) {
        Promise.reject(error.message);
      }

      const res = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      });

      await checkResponsePromise(res);
      return res;
    } else {
      return Promise.reject(err);
    }
  }
};

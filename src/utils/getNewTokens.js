import { setCookie } from './setCookie';
import { getCookie } from './getCookie';
import { checkResponse } from './checkResponse';

export async function getNewTokens(url, refreshToken, checkResponsePromise) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: `${refreshToken}`,
      }),
    });

    const fullResponse = await checkResponsePromise(res);

    setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1], { path: '/' });

    setCookie('refreshToken', fullResponse.refreshToken, { path: '/' });
  } catch (error) {
    throw new Error('Ошибка обновления токена');
  }
}

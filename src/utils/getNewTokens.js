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
    console.log('fullResponse: ', fullResponse);

    setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1], { path: '/' });
    console.log('fullResponse.accessToken:', fullResponse.accessToken.split('Bearer ')[1]);

    setCookie('refreshToken', fullResponse.refreshToken, { path: '/' });
    console.log('fullResponse.refreshToken: ', fullResponse.refreshToken);
  } catch (error) {
    throw new Error('Ошибка обновления токена');
  }
}

export function checkFunk() {
  if (!!getCookie('refreshToken')) {
    console.log('проверка функуии');
    getNewTokens('https://norma.nomoreparties.space/api/auth/token', getCookie('refreshToken'), checkResponse);
  }
}

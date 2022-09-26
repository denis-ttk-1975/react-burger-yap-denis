export async function checkResponse(res: any) {
  const serverResponseBody = await res.json();
  if (res.status !== 200) {
    if (serverResponseBody.message.length) {
      console.log(`${serverResponseBody.message}`);
      throw new Error(`${serverResponseBody.message}`);
    } else {
      console.log(`Сервер не может обработать запрос. Вернулась ошибка с кодом : ${res.status}`);
      throw new Error(`Сервер не может обработать запрос. Вернулась ошибка с кодом : ${res.status}`);
    }
  }
  if (!res.ok) {
    console.log('Сервер не дал ответа: ', 'Сервер не дал ответа');
    throw new Error('Сервер не дал ответа');
  }
  return serverResponseBody;
}

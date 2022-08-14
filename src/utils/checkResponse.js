export async function checkResponse(res) {
  if (res.status !== 200) {
    const serverResponseBody = await res.json();
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
}

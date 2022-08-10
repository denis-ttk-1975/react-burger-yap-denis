export async function checkResponse(res) {
  if (res.status !== 200) {
    const serverResponseBody = await res.json();
    if (serverResponseBody.message.length) {
      throw new Error(`Сервер не может обработать запрос. Причина: ${serverResponseBody.message}`);
    } else {
      throw new Error(`Сервер не может обработать запрос. Вернулась ошибка с кодом : ${res.status}`);
    }
  }
  if (!res.ok) {
    throw new Error('Сервер не дал ответа');
  }
}

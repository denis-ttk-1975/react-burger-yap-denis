export function checkResponse(res) {
  if (!res.ok) {
    throw new Error('Сервер не дал ответа');
  }
}

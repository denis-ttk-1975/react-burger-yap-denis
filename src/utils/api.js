import { fetchUrlForIngredients, postUrlForOrder } from './url';

export const getProductData = async (setIngredients, setStateLoading, setErrorMessage, errorMessage) => {
  try {
    setStateLoading(true);
    const res = await fetch(fetchUrlForIngredients);
    if (!res.ok) {
      throw new Error('Сервер не дал ответа');
    }
    const fullResponse = await res.json();
    setIngredients([...fullResponse.data]);
    setStateLoading(false);
  } catch (error) {
    setErrorMessage(error.message);
    console.log('Возникла проблема с вашим fetch запросом: ', errorMessage);

    setStateLoading(false);
  }
};

export const postOrderData = async (setOrderNumber, setStateLoading, setErrorMessage, errorMessage) => {
  let fullResponse;
  try {
    setStateLoading(true);
    const res = await fetch(postUrlForOrder, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: ['60d3b41abdacab0026a733c6'],
      }),
    });
    if (!res.ok) {
      throw new Error('Сервер не дал ответа о приеме заказа');
    }
    fullResponse = await res.json();
    console.log('fullResponse1: ', fullResponse);

    setOrderNumber(('000000' + fullResponse.order.number).slice(-6));
  } catch (error) {
    setErrorMessage(error.message);
    console.log('Возникла проблема с вашим fetch запросом: ', errorMessage);

    setStateLoading(false);
  }
  console.log('fullResponse2: ', fullResponse);
  return fullResponse;
};
import { fetchUrlForIngredients, postUrlForOrder } from './url';

function checkResponse(data) {
  if (!data.ok) {
    throw new Error('Сервер не дал ответа');
  }
}

export const getProductData = async (setIngredients, setStateLoading, setErrorMessage, errorMessage) => {
  try {
    setStateLoading(true);
    const res = await fetch(fetchUrlForIngredients);
    checkResponse(res);
    const fullResponse = await res.json();
    setIngredients([...fullResponse.data]);
    setStateLoading(false);
  } catch (error) {
    setErrorMessage(error.message);
    console.log('Возникла проблема с вашим fetch запросом: ', errorMessage);

    setStateLoading(false);
  }
};

export const postOrderData = async (setOrderNumber, setStateLoading, setErrorMessage, errorMessage, ingredients) => {
  let fullResponse;
  try {
    const bodyIngredients = ingredients.filter((item) => item.__v > 0);
    setStateLoading(true);
    const res = await fetch(postUrlForOrder, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: bodyIngredients,
      }),
    });
    checkResponse(res);
    fullResponse = await res.json();
    setOrderNumber(('000000' + fullResponse.order.number).slice(-6));
    setStateLoading(false);
  } catch (error) {
    setErrorMessage(error.message);
    console.log('Возникла проблема с вашим fetch запросом: ', errorMessage);

    setStateLoading(false);
  }

  return fullResponse;
};

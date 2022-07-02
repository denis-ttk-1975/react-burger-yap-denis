import fetchUrl from './fetch-url';

const getProductData = async (setIngredients, setStateLoading, setErrorMessage, errorMessage) => {
  try {
    setStateLoading(true);
    const res = await fetch(fetchUrl);
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

export default getProductData;

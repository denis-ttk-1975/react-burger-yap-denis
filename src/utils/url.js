const baseUrl = 'https://norma.nomoreparties.space/api/';

const baseWs = 'wss://norma.nomoreparties.space/orders';

export const fetchUrlForIngredients = `${baseUrl}ingredients`;

export const postUrlForOrder = `${baseUrl}orders`;

export const postUrlForgotPassword = `${baseUrl}password-reset`;

export const postUrlResetPassword = `${baseUrl}password-reset/reset`;

export const postUrlUserLogin = `${baseUrl}auth/login`;

export const postUrlUserRegister = `${baseUrl}auth/register`;

export const postUrlUserLogout = `${baseUrl}auth/logout`;

export const postUrlUserTokenRefresh = `${baseUrl}auth/token`;

export const urlUserInfo = `${baseUrl}auth/user`;

export const wsAllOrdersInfo = `${baseWs}/all`;

export const wsUserOrdersInfo = `${baseWs}`;

import Cookies from 'js-cookie';

export const saveTokensStorage = (data: string) => {
  Cookies.set('accessToken', data);
  Cookies.set('refreshToken', data);
};

export const saveToStorage = (data: string) => {
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data));
};

export const removeTokensStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

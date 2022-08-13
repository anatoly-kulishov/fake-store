import Cookies from 'js-cookie';

import { IAuthUser } from '@/components/screens/auth/auth.interface';

export const saveTokensStorage = (data: IAuthUser) => {
  Cookies.set('accessToken', data.token);
  Cookies.set('refreshToken', data.token);
};

export const saveToStorage = (data: IAuthUser) => {
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data));
};

export const removeTokensStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

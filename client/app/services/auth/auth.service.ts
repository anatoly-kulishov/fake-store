import axios from 'axios';
import Cookies from 'js-cookie';

import { getContentType } from '@/api/api.helpers';
import { getAuthUrl } from '@/configs/api.config';
import { API_URL } from '@/configs/constants';
import { axiosClassic } from '@/api/interceptors';
import { IToken } from '@/store/auth/auth.interface';

import { removeTokensStorage, saveToStorage } from './auth.helper';

export const AuthService = {
  async login(username: string, password: string) {
    const response = await axiosClassic.post<IToken>(getAuthUrl('/login'), {
      username,
      password,
    });

    if (response.data.token) {
      saveToStorage({
        username,
        token: response.data.token,
      });
    }

    return response;
  },
  logout() {
    removeTokensStorage();
    localStorage.removeItem('user');
  },
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    const response = await axios.post<IToken>(
      `${API_URL}${getAuthUrl('/login')}`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      },
    );

    if (response.data.token) {
      saveToStorage({
        username: refreshToken || 'guest',
        token: response.data.token,
      });
    }

    return response;
  },
};

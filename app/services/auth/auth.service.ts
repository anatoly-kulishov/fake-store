import axios from 'axios';
import Cookies from 'js-cookie';

import { removeTokensStorage, saveToStorage } from './auth.helper';
import { API_URL } from '../../shared/constants';
import { getAuthUrl } from '../../configs/api.config';
import { getContentType } from '../../api/api.helpers';

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axios.post<any>(`${API_URL}${getAuthUrl('/register')}`, {
      email,
      password,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
  async login(email: string, password: string) {
    const response = await axios.post<any>(`${API_URL}${getAuthUrl('/login')}`, {
      email,
      password,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
  logout() {
    removeTokensStorage();
    localStorage.removeItem('user');
  },
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    const response = await axios.post<any>(
      `${API_URL}${getAuthUrl('/login/access-token')}`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      },
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
};

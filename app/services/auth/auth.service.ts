import axios from 'axios';

import { removeTokensStorage, saveToStorage } from './auth.helper';

import { getContentType } from '@/api/api.helpers';
import { API_URL } from '@/configs/constants';
import { getAuthUrl } from '@/configs/api.config';

export const AuthService = {
  async login(username: string, password: string) {
    const response = await axios.post<{ token: string }>(`${API_URL}${getAuthUrl('/login')}`, {
      username,
      password,
    });

    if (response.data.token) {
      saveToStorage(response.data.token);
    }

    return response;
  },
  logout() {
    removeTokensStorage();
    localStorage.removeItem('user');
  },
  async getNewTokens() {
    const mockRefreshToken = {
      username: 'mor_2314',
      password: '83r5^_',
    };
    // const refreshToken = Cookies.get('refreshToken');
    const response = await axios.post<any>(
      `${API_URL}${getAuthUrl('/login')}`,
      {
        ...mockRefreshToken,
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

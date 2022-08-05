import axios from 'axios';
import Cookies from 'js-cookie';

import { errorCatch } from './api.helpers';

import { API_URL } from '@/configs/constants';
import { AuthService } from '@/services/auth/auth.service';
import { removeTokensStorage } from '@/services/auth/auth.helper';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  const accessToken = Cookies.get('accessToken');
  // eslint-disable-next-line no-param-reassign
  if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      // eslint-disable-next-line no-underscore-dangle
      !error.config._isRetry
    ) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();

        return await instance.request(originalRequest);
      } catch (e) {
        if (errorCatch(e) === 'jwt expired') removeTokensStorage();
      }
    }

    throw error;
  },
);

export default instance;

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

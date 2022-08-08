import { HttpMethods } from '@/shared/types';

import axios from './interceptors';

type TypeInput = {
  url: string;
  method?: HttpMethods;
  body?: object;
};

export const api = async ({ url, method = 'GET', body }: TypeInput) => {
  return axios({
    method,
    url,
    data: body,
  });
};

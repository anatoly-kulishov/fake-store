import axios from './interceptors';

type TypeInput = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
};

export const api = async ({ url, method = 'GET', body }: TypeInput) => {
  return axios({
    method,
    url,
    data: body,
  });
};

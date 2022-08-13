import { AxiosError } from 'axios';

import { capitalizeFirstLetter } from '@/utils/string/capitalizeFirstLetter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorCatch = (error: AxiosError<any>): string => {
  if (error.response && error.response.data) {
    if (typeof error.response.data === 'object') {
      return error.response.data[0];
    }
    return capitalizeFirstLetter(error.response.data);
  }
  return error.message;
};

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

import { toastr } from 'react-redux-toastr';

import { errorCatch } from '../../api/api.helpers';

export const toastError = (error: any, title?: string) => {
  const message = errorCatch(error);
  toastr.error(title || 'Error request', message);
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw message;
};

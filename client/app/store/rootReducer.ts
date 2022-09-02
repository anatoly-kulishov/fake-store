import { reducer as toastrReducer } from 'react-redux-toastr';

import { reducer as authReducer } from './auth/auth.slice';
import { reducer as productsReducer } from './products/products.slice';

export const reducers = {
  auth: authReducer,
  products: productsReducer,
  toastr: toastrReducer,
};

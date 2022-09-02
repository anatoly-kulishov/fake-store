import * as authActions from './auth/auth.actions';
import * as productsActions from './products/products.actions';

export const allActions = {
  ...authActions,
  ...productsActions,
};

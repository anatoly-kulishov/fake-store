import { reducer as toastrReducer } from 'react-redux-toastr';

import { reducer as appReducer } from './app/app.slice';

export const reducers = {
  app: appReducer,
  toastr: toastrReducer,
};

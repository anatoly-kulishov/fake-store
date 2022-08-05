import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'api/api.helpers';
import { toastr } from 'react-redux-toastr';

import { IAuthResponse, InterfaceEmailPassword } from './user.interface';

import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/api/withToastrErrorRedux';

export const loginAC = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);
      toastr.success('Login', 'Completed successfully');
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutAC = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const checkAuthAC = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkAPI) => {
  try {
    const response = await AuthService.getNewTokens();
    return response.data;
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      toastr.error('Logout', 'Your authorizaiton is finished, plz sign in again');
      thunkAPI.dispatch(logoutAC());
    }
    return thunkAPI.rejectWithValue(error);
  }
});

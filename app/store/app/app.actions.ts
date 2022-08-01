import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthResponse, InterfaceEmailPassword } from './app.interface';
import { errorCatch } from '../../api/api.helpers';

import { toastError } from '@/utils/api/withToastrErrorRedux';
import { AuthService } from '@/services/auth/auth.service';

export const register = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password);
      toastr.success('Registration', 'Completed successfully');
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      toastr.success('Login', 'Completed successfully');
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkAPI) => {
  try {
    const response = await AuthService.getNewTokens();
    return response.data;
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      toastr.error('Logout', 'Your authorizaiton is finished, plz sign in again');
      thunkAPI.dispatch(logout());
    }
    return thunkAPI.rejectWithValue(error);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import axios from 'axios';

import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/api/withToastrErrorRedux';

import { IAuthResponse, InterfaceEmailPassword, ITokens } from './user.interface';

export const loginAC = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);
      toastr.success('Login', 'Completed successfully');
      return {
        username,
        token: response.data.token,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error);
      }
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutAC = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const checkAuthAC = createAsyncThunk<ITokens>('auth/check-auth', async (_, thunkAPI) => {
  try {
    const response = await AuthService.getNewTokens();
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastr.error('Logout', 'Your authorizaiton is finished, plz sign in again');
    }
    return thunkAPI.rejectWithValue(error);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import axios from 'axios';

import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/api/withToastrErrorRedux';
import { UserService } from '@/services/user/user.service';

import { IAuthResponse, InterfaceEmailPassword, IToken } from './user.interface';

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

export const checkAuthAC = createAsyncThunk<IToken>('auth/check-auth', async (_, thunkAPI) => {
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

export const getRandomUserAC = createAsyncThunk('users/get-random-user', async (_, thunkAPI) => {
  try {
    const response = await UserService.getRandomUser();
    return {
      username: response.data.username,
      password: response.data.password,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toastError(error);
    }
    return thunkAPI.rejectWithValue(error);
  }
});

export const clearRandomUserAC = createAsyncThunk('users/clear-random-user', async () => {
  await UserService.getRandomUser();
});

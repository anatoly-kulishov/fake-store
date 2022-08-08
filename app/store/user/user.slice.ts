import { createSlice } from '@reduxjs/toolkit';

import { getStoreLocal } from '@/utils/storage/local';

import { checkAuthAC, loginAC, logoutAC } from './user.actions';
import { IUserInitialState } from './user.interface';

const initialState: IUserInitialState = {
  user: {
    username: getStoreLocal('user')?.username,
    token: getStoreLocal('user')?.token,
    isAdmin: true,
  },
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAC.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginAC.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {
          username: payload.username,
          token: payload.token,
          isAdmin: true,
        };
      })
      .addCase(loginAC.rejected, state => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutAC.fulfilled, state => {
        state.user = null;
      })
      .addCase(checkAuthAC.fulfilled, (state, { payload }) => {
        state.user = {
          username: getStoreLocal('user')?.username,
          token: payload.accessToken,
          isAdmin: true,
        };
      });
  },
});

export const { reducer } = userSlice;

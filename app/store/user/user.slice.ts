import { createSlice } from '@reduxjs/toolkit';

import { checkAuthAC, loginAC, logoutAC } from './user.actions';
import { IUserInitialState } from './user.interface';

import { getStoreLocal } from '@/utils/storage/local';

const initialState: IUserInitialState = {
  user: {
    token: getStoreLocal('user'),
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
          token: payload.token,
          isAdmin: true,
        };
      })
      .addCase(loginAC.rejected, state => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutAC.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(checkAuthAC.fulfilled, (state, { payload }) => {
        state.user = {
          token: payload.token,
          isAdmin: true,
        };
      });
  },
});

export const { reducer } = userSlice;

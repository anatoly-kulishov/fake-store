import { createSlice } from '@reduxjs/toolkit';

import { checkAuthAC, clearRandomUserAC, getRandomUserAC, loginAC, logoutAC } from '@/store/auth/auth.actions';
import { IAuthInitialState } from '@/store/auth/auth.interface';
import { getStoreLocal } from '@/utils/storage/local';

const initialState: IAuthInitialState = {
  owner: {
    username: getStoreLocal('owner')?.username,
    token: getStoreLocal('owner')?.token,
    isAdmin: true,
  },
  randomUser: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAC.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginAC.fulfilled, (state, { payload }) => {
        state.owner = {
          username: payload.username,
          token: payload.token,
          isAdmin: true,
        };
        state.isLoading = false;
      })
      .addCase(loginAC.rejected, state => {
        state.isLoading = false;
        state.owner = null;
      })
      .addCase(logoutAC.fulfilled, state => {
        state.owner = null;
      })
      .addCase(getRandomUserAC.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRandomUserAC.fulfilled, (state, { payload }) => {
        state.randomUser = payload;
        state.isLoading = false;
      })
      .addCase(clearRandomUserAC.fulfilled, state => {
        state.randomUser = null;
      })
      .addCase(checkAuthAC.fulfilled, (state, { payload }) => {
        state.owner = {
          username: getStoreLocal('owner')?.username,
          token: payload.token,
          isAdmin: true,
        };
      });
  },
});

export const { reducer } = authSlice;

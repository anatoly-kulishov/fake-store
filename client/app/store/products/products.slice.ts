import { createSlice } from '@reduxjs/toolkit';

import { IProductsInitialState } from '@/store/products/products.interface';
import { getAllProductsCategoriesAC } from '@/store/products/products.actions';

const initialState: IProductsInitialState = {
  categories: null,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProductsCategoriesAC.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProductsCategoriesAC.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    });
  },
});

export const { reducer } = productsSlice;

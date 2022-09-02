import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toastError } from '@/utils/api/withToastrErrorRedux';
import { ProductService } from '@/services/product/product.service';
import { IProductsResponse } from '@/store/products/products.interface';

export const getAllProductsCategoriesAC = createAsyncThunk<IProductsResponse>(
  'products/get-all-categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await ProductService.getAllProductsCategories();
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error);
      }
      return thunkAPI.rejectWithValue(error);
    }
  },
);

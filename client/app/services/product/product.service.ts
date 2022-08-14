import axios from 'axios';

import { getProductsUrl } from '@/configs/api.config';
import { IProduct } from '@/shared/types/product.types';
import { API_URL } from '@/configs/constants';

export const ProductService = {
  async getAllProducts() {
    return axios.get<IProduct[]>(`${API_URL}${getProductsUrl()}`);
  },
  async getProductById(id: number) {
    return axios.get<IProduct>(`${API_URL}${getProductsUrl(`/${id}`)}`);
  },
  async deleteProductById(id: number) {
    await axios.delete<IProduct>(`${API_URL}${getProductsUrl(`/${id}`)}`);
  },
};

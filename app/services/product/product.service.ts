import axios from 'axios';

import { API_URL } from '@/configs/constants';
import { getProductsUrl } from '@/configs/api.config';
import { IProduct } from '@/shared/types/product.types';

export const ProductService = {
  async delete(id: number) {
    await axios.delete<IProduct>(`${API_URL}${getProductsUrl(`/${id}`)}`);
  },
};

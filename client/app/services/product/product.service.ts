import axios from 'axios';

import { getProductsUrl } from '@/configs/api.config';
import { IProduct } from '@/shared/types/product.types';
import { API_URL } from '@/configs/constants';

export const ProductService = {
  async delete(id: number) {
    await axios.delete<IProduct>(`${API_URL}${getProductsUrl(`/${id}`)}`);
  },
};

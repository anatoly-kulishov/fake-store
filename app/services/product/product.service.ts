import axios from 'axios';

import { API_URL } from '@/configs/constants';
import { getProductsUrl } from '@/configs/api.config';

export const ProductService = {
  async delete(id: number) {
    await axios.delete<any>(`${API_URL}${getProductsUrl(`/${id}`)}`);
  },
};

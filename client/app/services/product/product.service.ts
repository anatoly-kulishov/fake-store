import { IProduct } from '@/shared/types/product.types';
import { getProductsUrl } from '@/configs/api.config';
import { axiosClassic } from '@/api/interceptors';

export const ProductService = {
  async getAllProducts() {
    return axiosClassic.get<IProduct[]>(getProductsUrl());
  },
  async getProductById(id: number) {
    return axiosClassic.get<IProduct>(getProductsUrl(`/${id}`));
  },
  async deleteProductById(id: number) {
    await axiosClassic.delete<IProduct>(getProductsUrl(`/${id}`));
  },
};

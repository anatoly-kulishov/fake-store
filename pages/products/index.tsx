import React from 'react';

import { NextPageAuth } from '@/shared/types/auth.types';
import { IProduct } from '@/shared/types/product.types';
import { getProductsUrl } from '@/configs/api.config';
import Products from '@/components/screens/products';
import { API_URL } from '@/configs/constants';
import { api } from '@/api/fetch';

export const getStaticProps = async () => {
  const response = await api({ url: `${API_URL}${getProductsUrl()}`, method: 'GET' });
  const { data } = response;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: data, fallback: 'blocking' },
  };
};

interface IProductsPageProps {
  products: IProduct[];
}

const ProductsPage: NextPageAuth | any = ({ products }: IProductsPageProps) => {
  return <Products products={products} />;
};

ProductsPage.isOnlyAdmin = true;

export default ProductsPage;

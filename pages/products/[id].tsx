import React from 'react';

import { SingleProduct } from '@/components/screens/single-product/SingleProduct';
import { IProduct } from '@/shared/types/product.types';
import { NextPageAuth } from '@/shared/types/auth.types';
import { API_URL } from '@/configs/constants';
import { api } from '@/api/fetch';

export const getServerSideProps = async (context: { params: IProduct }) => {
  const { id } = context.params;
  const response = await api({ url: `${API_URL}/products/${id}`, method: 'GET' });
  const { data } = response;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
  };
};

interface IProductProps {
  product: IProduct;
}

const ProductPage: NextPageAuth<IProductProps> = ({ product }) => {
  return <SingleProduct product={product} />;
};

ProductPage.isOnlyAdmin = true;

export default ProductPage;

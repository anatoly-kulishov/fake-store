import React from 'react';

import SingleProduct from '@/components/screens/single-product';
import { ProductService } from '@/services/product/product.service';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IProduct } from '@/shared/types/product.types';

export const getServerSideProps = async (context: { params: Required<IProduct> }) => {
  const { id } = context.params;
  const { data: product } = await ProductService.getProductById(id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
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

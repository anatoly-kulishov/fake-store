import React from 'react';

import { ProductService } from '@/services/product/product.service';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IProduct } from '@/shared/types/product.types';
import Products from '@/components/screens/products';

export const getStaticProps = async () => {
  const { data: products } = await ProductService.getAllProducts();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products, fallback: 'blocking' },
  };
};

interface IProductsPageProps {
  products: IProduct[];
}

const ProductsPage: NextPageAuth<IProductsPageProps> = ({ products }) => {
  return <Products products={products} />;
};

ProductsPage.isOnlyAdmin = true;

export default ProductsPage;

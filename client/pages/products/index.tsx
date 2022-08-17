import React from 'react';
import { GetStaticProps } from 'next';

import { ProductService } from '@/services/product/product.service';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IProduct } from '@/shared/types/product.types';
import Products from '@/components/screens/products';

/**
 * Получает данные для статической генерации.
 * Когда использовать?
 * Данные для рендера доступны во время сборки
 * Данные могут быть публично закэшированы
 * Страница должна быть доступна для индексирования
 */
export const getStaticProps: GetStaticProps = async () => {
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

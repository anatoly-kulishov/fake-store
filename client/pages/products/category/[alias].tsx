import { GetStaticPaths } from 'next';

import { ProductService } from '@/services/product/product.service';
import { IProduct } from '@/shared/types/product.types';
import Products from '@/components/screens/products';

export const getStaticPaths: GetStaticPaths = async () => {
  // const { data: products } = await ProductService.getAllProducts();
  const { data: categories } = await ProductService.getAllProductsCategories();

  // const pathsIds = products.map(({ id }: { id: number }) => ({
  //   params: { alias: id.toString() },
  // }));

  const pathsCategories = categories.map(category => ({
    params: { alias: category },
  }));

  return {
    paths: pathsCategories,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { alias: string } }) => {
  const { alias } = context.params;
  const { data: products } = await ProductService.getProductByCategory(alias);

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products, fallback: 'blocking' },
  };
};

interface IProductsCategoryPageProps {
  products: IProduct[];
}

const ProductsCategoryPage = ({ products }: IProductsCategoryPageProps) => {
  return <Products products={products} />;
};

export default ProductsCategoryPage;

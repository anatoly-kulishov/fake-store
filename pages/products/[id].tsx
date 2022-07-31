import React, { FC } from 'react';

import Meta from '../../components/Meta/Meta';
import Heading from '../../components/ui/Heading/Heading';
import { IProduct } from '../../shared/models/product';
import { API_BASE_PATH } from '../../configs/constants';

export const getStaticPaths = async () => {
  const response = await fetch(`${API_BASE_PATH}/products`);
  const data = await response.json();

  const paths = data.map(({ id }: { id: number }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: IProduct }) => {
  const { id } = context.params;
  const response = await fetch(`${API_BASE_PATH}/products/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data, fallback: 'blocking' },
  };
};

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => (
  <Meta title={product.title}>
    <div className="max-w-xl container mx-auto pt-5 mt-[50px] text-center">
      <img src={product.image} alt="" className="w-1/6 mb-2 m-auto" />
      <Heading tag="h2" text={product.title} />
      <p>{product.description}</p>
    </div>
  </Meta>
);

export default Product;

import * as React from 'react';
import { FC } from 'react';

import Meta from '../../components/Meta/Meta';
import { Product } from '../../components/Product/Product';
import { IProduct } from '../../shared/models/product';
import { API_BASE_PATH } from '../../configs/constants';

export const getStaticProps = async () => {
  const response = await fetch(`${API_BASE_PATH}/products`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Products: FC<{ posts: IProduct[] }> = ({ posts }) => {
  return (
    <Meta title="Products page">
      <div className="max-w-lg container mx-auto pt-5 mt-[50px]">
        {posts && posts.map((product: IProduct) => <Product data={product} key={product.id} />)}
      </div>
    </Meta>
  );
};

export default Products;

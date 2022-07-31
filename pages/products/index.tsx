import React, { FC } from 'react';

import Meta from '../../app/components/shared/meta';
import Product from '../../app/components/screens/product';
import { IProduct } from '../../app/shared/models/product';
import { API_URL } from '../../app/shared/constants';

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/products`);
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
        {posts && posts.map((product: IProduct) => <Product key={product.id} data={product} />)}
      </div>
    </Meta>
  );
};

export default Products;

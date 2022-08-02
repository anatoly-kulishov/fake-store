import React, { FC } from 'react';

import Meta from '../../app/components/shared/meta';

import { getProductsUrl } from '@/configs/api.config';
import { IProduct } from '@/shared/models/product';
import { API_URL } from '@/shared/constants';
import Product from '@/screens/product';

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}${getProductsUrl()}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data, fallback: 'blocking' },
  };
};

const Products: FC<{ posts: IProduct[] }> = ({ posts }) => {
  return (
    <Meta title="Products">
      <div className="container mx-auto pt-5 pb-5 mt-[50px]">
        <div className="overflow-x-auto relative shadow-2xl sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6" />
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Product</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Category</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Description</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Price</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>{posts && posts.map((product: IProduct) => <Product key={product.id} data={product} />)}</tbody>
          </table>
        </div>
      </div>
    </Meta>
  );
};

export default Products;

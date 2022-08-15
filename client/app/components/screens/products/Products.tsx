import React, { FC } from 'react';

import { ProductsScreenProps } from '@/components/screens/products/Products.props';
import { IProduct } from '@/shared/types/product.types';
import ProductRow from '@/components/ui/product-row';
import Meta from '@/components/shared/meta';

export const Products: FC<ProductsScreenProps> = ({ products }) => {
  return (
    <Meta title="Products">
      <div className="container mx-auto py-8">
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
            <tbody>
              {products.map((product: IProduct) => (
                <ProductRow key={product.id} data={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Meta>
  );
};

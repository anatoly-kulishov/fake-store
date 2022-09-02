import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProductRowProps } from '@/components/ui/product-row/ProductRow.props';
import { capitalizeFirstLetter } from '@/utils/string/capitalizeFirstLetter';
import { ProductService } from '@/services/product/product.service';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import { setCurrency } from '@/utils/string/setCurrency';

export const ProductRow: FC<IProductRowProps> = ({ data }) => {
  const deleteProductHandler = (): void => {
    ProductService.deleteProductById(data?.id);
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="p-4 w-32">
        <Image
          src={data.image}
          alt={data.title}
          quality={100}
          width={100}
          height={100}
          objectFit="contain"
          layout="responsive"
        />
      </td>
      <td className="py-4 px-6 font-semibold text-gray-900">{data.title}</td>
      <td className="py-4 px-6 font-semibold">
        <Link href={`/products/${data.category}`}>
          <a
            className="inline-block text-blue-700 transition-opacity hover:opacity-75 focus:opacity-75"
            aria-label={`Category is ${data.category}`}
          >
            {capitalizeFirstLetter(data.category)}
          </a>
        </Link>
      </td>
      <td className="py-4 px-6 font-semibold text-gray-900 text-xs">{capitalizeFirstLetter(data.description)}</td>
      <td className="py-4 px-6 font-semibold text-gray-900">{setCurrency(data.price)}</td>
      <td className="py-4 px-6">
        <div className="flex m-auto h-full">
          <Link href={`${AppRoutesEnum.PRODUCTS}/[id]`} as={`${AppRoutesEnum.PRODUCTS}/${data.id}`}>
            <a className="font-medium text-indigo-700 transition-colors hover:text-blue-800 focus:text-blue-800 mr-2 cursor-pointer">
              View
            </a>
          </Link>
          <button
            className="font-medium text-red-700 transition-all hover:text-red-800 focus:text-red-800"
            onClick={deleteProductHandler}
            disabled={!data?.id}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

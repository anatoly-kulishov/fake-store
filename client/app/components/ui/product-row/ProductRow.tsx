import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProductRowProps } from '@/components/ui/product-row/ProductRow.props';
import { capitalizeFirstLetter } from '@/utils/string/capitalizeFirstLetter';
import { ProductService } from '@/services/product/product.service';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import { setCurrency } from '@/utils/string/setCurrency';

export const ProductRow: FC<IProductRowProps> = ({ data }) => {
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
      <td className="py-4 px-6 font-semibold text-gray-900">
        <Link href={`#${data.category}`}>{capitalizeFirstLetter(data.category)}</Link>
      </td>
      <td className="py-4 px-6 font-semibold text-gray-900 text-xs">{capitalizeFirstLetter(data.description)}</td>
      <td className="py-4 px-6 font-semibold text-gray-900">{setCurrency(data.price)}</td>
      <td className="py-4 px-6">
        <Link href={`${AppRoutesEnum.PRODUCTS}/[id]`} as={`${AppRoutesEnum.PRODUCTS}/${data.id}`} passHref>
          <span className="font-medium text-blue-600 hover:underline mr-2 cursor-pointer">View</span>
        </Link>
        <span
          className="font-medium text-red-600 hover:underline cursor-pointer"
          onClick={() => data.id && ProductService.deleteProductById(data.id)}
        >
          Remove
        </span>
      </td>
    </tr>
  );
};

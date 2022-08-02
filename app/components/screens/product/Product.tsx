import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProduct } from '@/shared/models/product';
import { AppRoutesEnum } from '@/shared/models/routes';
import { ProductService } from '@/services/product/product.service';
import { capitalizeFirstLetter } from '@/utils/string/capitalizeFirstLetter';
import { setCurrency } from '@/utils/string/setCurrency';
import GraphCMSImageLoader from '@/utils/image/graphCMSImageLoader';

interface IProductProps {
  data: IProduct;
}

export const Product: FC<IProductProps> = ({ data }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="p-4 w-32">
        <Image
          loader={() => GraphCMSImageLoader(data.image)}
          src={data.image}
          alt={data.title}
          quality={100}
          width={300}
          height={300}
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
        <Link href={`${AppRoutesEnum.PRODUCTS}/[id]`} as={`${AppRoutesEnum.PRODUCTS}/${data.id}`}>
          <span className="font-medium text-blue-600 hover:underline mr-2 cursor-pointer">View</span>
        </Link>
        <span
          className="font-medium text-red-600 hover:underline cursor-pointer"
          onClick={() => data.id && ProductService.delete(data.id)}
        >
          Remove
        </span>
      </td>
    </tr>
  );
};

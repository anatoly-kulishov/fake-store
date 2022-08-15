import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IProductScreenProps } from '@/components/screens/single-product/SingleProduct.props';
import { capitalizeFirstLetter } from '@/utils/string/capitalizeFirstLetter';
import { AppRouteKeys, AppRoutesEnum } from '@/shared/types/routes.types';
import { Breadcrumb } from '@/components/ui/breadcrumb/Breadcrumb';
import { setCurrency } from '@/utils/string/setCurrency';
import Heading from '@/components/ui/heading';
import Meta from '@/components/shared/meta';

export const SingleProduct: FC<IProductScreenProps> = ({ product }) => {
  return (
    <Meta title={product.title}>
      <div className="max-w-6xl p-5">
        <div className="pl-1 mb-5">
          <Breadcrumb
            startPath={{ title: AppRouteKeys.HOME, href: AppRoutesEnum.HOME }}
            paths={[
              {
                title: AppRouteKeys.PRODUCTS,
                href: AppRoutesEnum.PRODUCTS,
              },
            ]}
            endPath={`${product.title}`}
          />
        </div>
        <div className="max-w-full flex flex-row pt-4 bg-white rounded-lg border border-gray-200 shadow-md ">
          <div className="max-w-xl w-full p-5">
            <Image
              src={product.image}
              alt={product.title}
              quality={100}
              width={500}
              height={500}
              objectFit="contain"
              layout="responsive"
            />
          </div>
          <div className="max-w-xl p-5">
            <Heading tag="h2" text={product.title} className="mb-2 text-xl font-bold tracking-tight text-gray-900" />
            <p className="mb-3 font-normal text-gray-700 text-sm">{product.description}</p>
            <div className="text-left border-t-2 border-t-gray-300 pt-2">
              <p className="mb-2 text-gray-700">
                Category:{' '}
                <Link href={`#${product.category}`} passHref>
                  <span className="font-bold cursor-pointer">{capitalizeFirstLetter(product.category)}</span>
                </Link>
              </p>
              <p className="mb-2 text-gray-700">
                Price: <span className="font-bold">{setCurrency(product.price)}</span>
              </p>
              <p className="text-gray-700 mb-0">
                Rating:{' '}
                <span className="font-bold">
                  {product.rating.rate} / {product.rating.count}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Meta>
  );
};

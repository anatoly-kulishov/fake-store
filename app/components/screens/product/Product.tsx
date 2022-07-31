import React, { FC, useState } from 'react';
import Link from 'next/link';

import Heading from '../../ui/heading';
import { IProduct } from '../../../shared/models/product';
import { AppRoutesEnum } from '../../../shared/models/routes';

interface IProductProps {
  data: IProduct;
}

export const Product: FC<IProductProps> = ({ data }) => {
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setIsDetails(!isDetails);
  };

  return (
    <div className="py-4 px-6 border rounded flex items-center flex-col mb-2">
      <img src={data.image} alt="" className="w-1/6 mb-2" />
      <Heading
        tag="h2"
        text={
          <Link href={`${AppRoutesEnum.PRODUCTS}/${data.id}`}>
            <span className="text-link">{data.title}</span>
          </Link>
        }
      />
      <p className="pt-2">
        Price: <span className="font-bold">{data.price}$</span>
      </p>
      <button className="border py-2 px-4 mt-2 rounded text-white font-semibold bg-blue-400" onClick={toggleDetails}>
        Show Details
      </button>
      {isDetails && (
        <div className="mt-2 max-w-md text-center">
          <p className="mb-1">{data.description}</p>
          <p>
            Rate: <span className="font-bold">{data.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

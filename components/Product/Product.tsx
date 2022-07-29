import * as React from 'react';
import { FC, useState } from 'react';
import Link from 'next/link';

import { IProduct } from '../../shared/models/product';
import Heading from '../UI/Heading/Heading';

interface IProductProps {
  data: IProduct;
}

export const Product: FC<IProductProps> = ({ data }) => {
  const { id, title, image, description, price, rating } = data;
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setIsDetails(!isDetails);
  };

  return (
    <div className="py-4 px-6 border rounded flex items-center flex-col mb-2" key={id}>
      <img src={image} alt="" className="w-1/6 mb-2" />
      <Heading tag="h2" text={<Link href={`/products/${id}`}>{title}</Link>} />
      <p>
        Price: <span className="font-bold">{price}$</span>
      </p>
      <button className="border py-2 px-4 mt-2 rounded text-white font-semibold bg-blue-400" onClick={toggleDetails}>
        Show Details
      </button>
      {isDetails && (
        <div className="mt-2 max-w-md text-center">
          <p className="mb-1">{description}</p>
          <p>
            Rate: <span className="font-bold">{rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

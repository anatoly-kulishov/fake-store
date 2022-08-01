import React, { FC } from 'react';
import Link from 'next/link';

import { IUser } from '@/shared/models/user';
import { AppRoutesEnum } from '@/shared/models/routes';

interface IProductProps {
  data: IUser;
}

export const User: FC<IProductProps> = ({ data }) => {
  return (
    <tr
      key={data.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Link href={`${AppRoutesEnum.USERS}/${data.id}`}>
          <span className="text-link">{data.username}</span>
        </Link>
      </th>
      <td className="py-4 px-6">
        {data.name.firstname} {data.name.lastname}
      </td>
      <td className="py-4 px-6">{data.email}</td>
      <td className="py-4 px-6">{data.password}</td>
      <td className="py-4 px-6">{data.phone}</td>
      <td className="py-4 px-6">
        {data.address.geolocation.lat}
        {data.address.geolocation.long}
      </td>
      <td className="py-4 px-6">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

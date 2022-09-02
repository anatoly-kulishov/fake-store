import React, { FC } from 'react';
import Link from 'next/link';

import { IUserRowProps } from '@/components/ui/user-row/UserRow.props';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import { UserService } from '@/services/user/user.service';

export const UserRow: FC<IUserRowProps> = ({ data }) => {
  const deleteUserHandler = (): void => {
    UserService.deleteUserById(data.id);
  };

  return (
    <tr key={data.id} className="bg-white border-b">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={`checkbox-table-${data.id}`}
            name={`checkbox-table-${data.id}`}
            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor={`checkbox-table-${data.id}`} className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
        <span>{data.username}</span>
      </th>
      <td className="py-4 px-6 text-gray-700">
        {data.name.firstname} {data.name.lastname}
      </td>
      <td className="py-4 px-6 text-gray-700">{data.email}</td>
      <td className="py-4 px-6 text-gray-700">{data.password}</td>
      <td className="py-4 px-6 text-gray-700">{data.phone}</td>
      <td className="py-4 px-6 text-gray-700">
        {data.address.geolocation.lat}
        {data.address.geolocation.long}
      </td>
      <td className="py-4 px-6">
        <div className="flex m-auto h-full">
          <Link href={`${AppRoutesEnum.USERS}/${data.id}`}>
            <a className="font-medium text-indigo-700 transition-colors hover:text-blue-800 focus:text-blue-800 mr-2 cursor-pointer">
              View
            </a>
          </Link>
          <button
            className="font-medium text-red-700 transition-all hover:text-red-800 focus:text-red-800"
            onClick={deleteUserHandler}
            disabled={!data?.id}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

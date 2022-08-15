import React, { FC } from 'react';
import Link from 'next/link';

import { IUserRowProps } from '@/components/ui/user-row/UserRow.props';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import { UserService } from '@/services/user/user.service';

export const UserRow: FC<IUserRowProps> = ({ data }) => {
  return (
    <tr key={data.id} className="bg-white border-b">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="checkbox-table-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
        <span>{data.username}</span>
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
        <Link href={`${AppRoutesEnum.USERS}/[id]`} as={`${AppRoutesEnum.USERS}/${data.id}`} passHref>
          <span className="font-medium text-blue-600 hover:underline mr-2 cursor-pointer">View</span>
        </Link>
        <span
          className="font-medium text-red-600 hover:underline cursor-pointer"
          onClick={() => data.id && UserService.deleteUserById(data.id)}
        >
          Remove
        </span>
      </td>
    </tr>
  );
};

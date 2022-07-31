import * as React from 'react';
import { FC } from 'react';
import Link from 'next/link';

import Meta from '../../components/Meta/Meta';
import { API_BASE_PATH } from '../../configs/constants';
import { IUser } from '../../shared/models/user';

export const getStaticProps = async () => {
  const response = await fetch(`${API_BASE_PATH}/users`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data },
  };
};

const Users: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <Meta title="Users page">
      <div className="container mx-auto pt-5 mt-[50px]">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="py-3 px-6">
                  Username
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Password
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="py-3 px-6">
                  Geolocation
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map(user => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Link href={`/users/${user.id}`}>{user.username}</Link>
                  </th>
                  <td className="py-4 px-6">
                    {user.name.firstname} {user.name.lastname}
                  </td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.password}</td>
                  <td className="py-4 px-6">{user.phone}</td>
                  <td className="py-4 px-6">
                    {user.address.geolocation.lat}
                    {user.address.geolocation.long}
                  </td>
                  <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Meta>
  );
};

export default Users;

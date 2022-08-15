import React, { FC } from 'react';

import { UsersScreenProps } from '@/components/screens/users/Users.props';
import UserRow from '@/components/ui/user-row';
import Meta from '@/components/shared/meta';

export const Users: FC<UsersScreenProps> = ({ users }) => {
  return (
    <Meta title="Users">
      <div className="container mx-auto py-8">
        <div className="overflow-x-auto relative shadow-2xl sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
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
                <UserRow key={user.id} data={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Meta>
  );
};

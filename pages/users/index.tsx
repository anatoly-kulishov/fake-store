import React, { FC } from 'react';

import Meta from '../../app/components/shared/meta';
import { User } from '../../app/components/screens/user/User';

import { IUser } from '@/shared/models/user';
import { API_URL } from '@/shared/constants';
import { getUsersUrl } from '@/configs/api.config';

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}${getUsersUrl()}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data, fallback: 'blocking' },
  };
};

const Users: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <Meta title="Users">
      <div className="container mx-auto p-5 mt-[50px]">
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
                <User key={user.id} data={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Meta>
  );
};

export default Users;

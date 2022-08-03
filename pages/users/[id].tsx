import React, { FC } from 'react';

import { api } from '../../app/api/fetch';

import Meta from '@/components/shared/meta';
import Heading from '@/components/ui/heading';
import { Breadcrumb } from '@/components/ui/breadcrumb/Breadcrumb';
import { IUser } from '@/shared/models/user';
import { API_URL } from '@/shared/constants';
import { AppRouteKeys, AppRoutesEnum } from '@/shared/models/routes';

export const getStaticPaths = async () => {
  const response = await api({ url: `${API_URL}/users`, method: 'GET' });
  const { data } = response;

  const paths = data.map(({ id }: { id: number }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: IUser }) => {
  const { id } = context.params;
  const response = await api({ url: `${API_URL}/users/${id}`, method: 'GET' });
  const { data } = response;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data, fallback: 'blocking' },
  };
};

interface IUserProps {
  user: IUser;
}

const User: FC<IUserProps> = ({ user }) => {
  return (
    <Meta title={user.username}>
      <div className="max-w-sm p-5">
        <div className="pl-1 mb-5">
          <Breadcrumb
            startPath={{ title: AppRouteKeys.HOME, href: AppRoutesEnum.HOME }}
            paths={[
              {
                title: AppRouteKeys.USERS,
                href: AppRoutesEnum.USERS,
              },
            ]}
            endPath={`${user.username}`}
          />
        </div>
        <div className="max-w-xs flex flex-row pt-4 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="max-w-xl px-5 pb-2">
            <Heading tag="h2" text={user.username} classes="mb-2 text-xl font-bold tracking-tight text-gray-900" />
            <div className="text-left border-t-2 pt-2">
              <p className="mb-2 text-gray-700">
                Name:{' '}
                <span className="font-bold">
                  {user.name.firstname} {user.name.lastname}
                </span>
              </p>
              <p className="mb-2 text-gray-700">
                Email: <span className="font-bold">{user.email}</span>
              </p>
              <p className="mb-2 text-gray-700">
                Password: <span className="font-bold">{user.password}</span>
              </p>
              <p className="mb-2 text-gray-700">
                Phone: <span className="font-bold">{user.phone}</span>
              </p>
              <div className="border-t-2 pt-2">
                <p className="mb-2 text-gray-700">
                  City: <span className="font-bold">{user.address.city}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  Street: <span className="font-bold">{user.address.street}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  Zipcode: <span className="font-bold">{user.address.zipcode}</span>
                </p>
                <p className="mb-2 text-gray-700">
                  Geolocation:{' '}
                  <span className="font-bold">
                    {user.address.geolocation.lat} {user.address.geolocation.long}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default User;

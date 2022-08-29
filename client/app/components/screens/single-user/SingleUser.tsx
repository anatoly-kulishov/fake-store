import React, { FC } from 'react';

import { ISingleUserScreenProps } from '@/components/screens/single-user/SingleUser.props';
import { AppRouteKeys, AppRoutesEnum } from '@/shared/types/routes.types';
import Breadcrumb from '@/components/ui/breadcrumb';
import Heading from '@/components/ui/heading';
import Meta from '@/components/shared/meta';

export const SingleUser: FC<ISingleUserScreenProps> = ({ user }) => {
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
            <Heading tag="h2" text={user.username} className="mb-2 text-xl font-bold tracking-tight text-gray-900" />
            <div className="text-left border-t-2 border-t-gray-300 pt-2">
              <p className="mb-2 text-gray-700">
                Name:{' '}
                <span className="font-bold">
                  {user.name.firstname} {user.name.lastname}
                </span>
              </p>
              <p className="mb-2 text-gray-700">
                Email:{' '}
                <a href={`mailto: {user.email}`} className="font-bold">
                  {user.email}
                </a>
              </p>
              <p className="mb-2 text-gray-700">
                Password: <span className="font-bold">{user.password}</span>
              </p>
              <p className="mb-2 text-gray-700">
                Phone:{' '}
                <a href={`tel:${user.phone}`} className="font-bold">
                  {user.phone}
                </a>
              </p>
              <div className="border-t-2 border-t-gray-300 pt-2">
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

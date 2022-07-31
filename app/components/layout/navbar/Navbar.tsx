import React, { FC } from 'react';
import Link from 'next/link';

import MobileMenuButton from '../../ui/mobile-menu-button';
import { AppRouteKeys, AppRoutesEnum } from '../../../shared/models/routes';
import { SITE_TITLE } from '../../../shared/constants';

const navigation = [
  { id: 1, name: AppRouteKeys.HOME, href: AppRoutesEnum.HOME },
  { id: 2, name: AppRouteKeys.PRODUCTS, href: AppRoutesEnum.PRODUCTS },
  { id: 3, name: AppRouteKeys.USERS, href: AppRoutesEnum.USERS },
];

const LOGO_URL: string = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg';
const HOME_LINK: string = navigation[0].href;

export const Navbar: FC = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg shadow-cyan-500/50">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <Link href={HOME_LINK}>
          <span className="flex items-center pointer cursor-pointer">
            <img src={LOGO_URL} className="mr-3 h-6 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{SITE_TITLE}</span>
          </span>
        </Link>
        <MobileMenuButton />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map(link => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <span className="cursor-pointer text-blue-600">Log out</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { ElementType, Fragment } from 'react';
import Link from 'next/link';

import { AppRoutesEnum } from '@/shared/types/routes.types';
import { capitalizeFirstLetter } from '@/utils/string/capitalizeFirstLetter';
import { Nullable } from '@/shared/types';
import { INavListItem } from '@/components/layout/navigation/nav-list/NavList.props';

export interface IDropDownMenuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuAs: ElementType<any> | undefined;
  navItem: INavListItem;
  subMenu: Nullable<string[]>;
  isLoading: boolean;
  isCurrentRoute?: boolean;
}

export const DropDownMenu = ({ menuAs, navItem, subMenu, isLoading, isCurrentRoute }: IDropDownMenuProps) => {
  return (
    <>
      <Menu as={menuAs} className="relative ml-3 mr-1" key={navItem.id}>
        <div>
          <Menu.Button
            className="max-w-xs rounded-full flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            tabIndex={0}
          >
            <span
              className={classNames(
                'block px-3 py-2 rounded-md text-sm font-medium',
                isCurrentRoute ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              )}
            >
              {navItem.name}
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {navItem.submenuId === AppRoutesEnum.PRODUCTS && !isLoading ? (
              subMenu?.map(item => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <Link href={`/products/category/${item}`}>
                      <a
                        className={classNames(
                          'cursor-pointer',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        )}
                      >
                        {capitalizeFirstLetter(item)}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

import { IUserNavMenuProps } from '@/components/layout/navigation/user-nav-menu/UserNavMenu.props';

export const UserNavMenu = ({ menuAs, children, username, userNavigation }: IUserNavMenuProps) => {
  return (
    <Menu as={menuAs} className="relative ml-3 mr-1">
      <div>
        <Menu.Button
          className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          tabIndex={0}
        >
          {children}
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
          <Menu.Item>
            <div className="py-2 px-4 border-b-2 border-gray-400 border-opacity-25">
              <span className="block text-sm text-indigo-600 font-bold">{username}</span>
            </div>
          </Menu.Item>
          {userNavigation.map(item => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <span
                  onClick={item.callback ? item.callback : () => null}
                  className={classNames(
                    'cursor-pointer',
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  )}
                >
                  {item.name}
                </span>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

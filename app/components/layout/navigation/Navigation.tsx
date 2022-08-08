import React, { FC, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

import { NavList, NavListMobile } from '@/components/layout/navigation/nav-list/NavList';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import Logo from '@/components/layout/navigation/logo';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import avatar from '@/assets/images/avatar.jpg';

const userNavigation = [{ name: 'Sign out', href: AppRoutesEnum.AUTH }];

export const Navigation: FC = () => {
  const { pathname } = useRouter();
  const { logoutAC } = useActions();
  const { user } = useAuth();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo />
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavList pathname={pathname} isAdmin={user?.isAdmin} />
                  </div>
                </div>
              </div>
              {user ? (
                <div className="hidden md:block z-10">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image className="h-10 w-10 rounded-full" src={avatar} alt="" width={35} height={35} />
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
                              <span className="block text-sm text-indigo-600 dark:text-white font-bold">
                                {user?.username}
                              </span>
                            </div>
                          </Menu.Item>
                          {userNavigation.map(item => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <span
                                  onClick={item.name === 'Sign out' ? logoutAC : () => null}
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
                  </div>
                </div>
              ) : (
                <Link href={AppRoutesEnum.AUTH}>
                  <a className="text-red-300">Login</a>
                </Link>
              )}
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavListMobile pathname={pathname} isAdmin={user?.isAdmin} />
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex items-center flex-shrink-0">
                  <Image src={avatar} className="h-10 w-10 rounded-full" width={32} height={32} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user?.username}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    onClick={item.name === 'Sign out' ? logoutAC : () => null}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

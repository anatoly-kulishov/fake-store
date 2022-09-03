import React, { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Logo from '@/components/layout/navigation/logo';
import { NavList, NavListMobile } from '@/components/layout/navigation/nav-list/NavList';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import AvatarIcon from '@/components/shared/icons/AvatarIcon';
import { useActions } from '@/hooks/useActions';
import UserNavMenu from '@/components/layout/navigation/user-nav-menu';
import { useAuth } from '@/hooks/useAuth';

import { MobileMenuButton } from './mobile-menu-button/MobileMenuButton';

export const Navigation: FC = () => {
  const { pathname } = useRouter();
  const { logoutAC } = useActions();
  const { owner } = useAuth();

  const userNavigation = [{ name: 'Sign out', href: AppRoutesEnum.AUTH, callback: logoutAC }];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo />
                <div className="hidden md:block">
                  <NavList pathname={pathname} isAdmin={owner?.isAdmin} />
                </div>
              </div>
              {owner ? (
                <div className="hidden md:block z-10">
                  <div className="ml-4 flex items-center md:ml-6">
                    <UserNavMenu menuAs="div" username={owner.username} userNavigation={userNavigation}>
                      <span className="sr-only">Open user menu</span>
                      <AvatarIcon className="rounded-full" size={30} aria-label="avatar" />
                    </UserNavMenu>
                  </div>
                </div>
              ) : (
                <Link href={AppRoutesEnum.AUTH}>
                  <a className="pr-2 md:pr-0 text-red-300">Login</a>
                </Link>
              )}
              {owner && <MobileMenuButton isOpen={open} />}
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <NavListMobile pathname={pathname} isAdmin={owner?.isAdmin} />
            <div className="pt-3 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex items-center flex-shrink-0">
                  <AvatarIcon className="rounded-full" size={30} aria-label="avatar" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{owner?.username}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    onClick={item.callback ? item.callback : () => null}
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

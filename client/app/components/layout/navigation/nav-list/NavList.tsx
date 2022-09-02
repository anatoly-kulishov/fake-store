import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';

import { INavListMenu, INavListProps } from '@/components/layout/navigation/nav-list/NavList.props';
import { isCurrentRoute } from '@/utils/route/isCurrentRoute';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getProductsState } from '@/store/products/products.selectors';
import DropDownMenu from '@/components/ui/drop-down-menu';
import { AppRouteKeys, AppRoutesEnum } from '@/shared/types/routes.types';

export const navListMenu: INavListMenu = [
  { id: 1, name: AppRouteKeys.HOME, href: AppRoutesEnum.HOME, current: true, isAvailable: true },
  {
    id: 2,
    name: AppRouteKeys.PRODUCTS,
    submenuId: AppRoutesEnum.PRODUCTS,
    href: AppRoutesEnum.PRODUCTS,
    current: false,
    isAvailable: false,
  },
  {
    id: 3,
    name: AppRouteKeys.USERS,
    href: AppRoutesEnum.USERS,
    current: false,
    isAvailable: false,
  },
  {
    id: 4,
    name: AppRouteKeys.UIKIT,
    href: AppRoutesEnum.UIKIT,
    current: false,
    isAvailable: false,
  },
];

export const NavList: FC<INavListProps> = ({ pathname, isAdmin }) => {
  const { getAllProductsCategoriesAC } = useActions();
  const { isLoading: isLoadingCategories, categories: productsCategories } = useTypedSelector(getProductsState);

  useEffect(() => {
    getAllProductsCategoriesAC();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="ml-10 flex items-baseline space-x-4" tabIndex={0} aria-label="main navigation">
      {navListMenu
        .filter(item => (!isAdmin && !item.isAvailable ? null : item))
        .map(item => {
          if (item?.submenuId) {
            return (
              <DropDownMenu
                menuAs="div"
                navItem={item}
                subMenu={productsCategories}
                isCurrentRoute={isCurrentRoute(pathname, item.href)}
                isLoading={isLoadingCategories}
              />
            );
          }
          return (
            <Link key={item.id} href={item.href}>
              <a
                className={classNames(
                  isCurrentRoute(pathname, item.href)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                )}
                tabIndex={0}
                aria-current={'page'}
              >
                {item.name}
              </a>
            </Link>
          );
        })}
    </nav>
  );
};

export const NavListMobile: FC<INavListProps> = ({ pathname, isAdmin }) => {
  return (
    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navListMenu
        .filter(item => (!isAdmin && !item.isAvailable ? null : item))
        .map(navItem => (
          <Disclosure.Button
            key={navItem.name}
            as={'a'}
            href={navItem.href}
            className={classNames(
              isCurrentRoute(pathname, navItem.href)
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            )}
            aria-current={navItem.current ? 'page' : undefined}
          >
            {navItem.name}
          </Disclosure.Button>
        ))}
    </nav>
  );
};

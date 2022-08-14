import React from 'react';

import HamburgerIcon from '@/components/shared/icons/HamburgerIcon';

export const MobileMenuButton = () => {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <HamburgerIcon />
    </button>
  );
};
import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';

export interface IMobileMenuButtonProps {
  isOpen: boolean;
}

export const MobileMenuButton = ({ isOpen }: IMobileMenuButtonProps) => {
  return (
    <div className="-mr-2 flex md:hidden">
      <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
};

import React, { FC } from 'react';

export const Footer: FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="p-4 mt-auto bg-white rounded-lg shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear}{' '}
        <a href="#" className="hover:underline">
          StackBro™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

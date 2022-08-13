import React, { FC } from 'react';

export const Footer: FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="p-4 mt-auto bg-white shadow-inner flex items-center justify-center md:p-6 bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center text-gray-400">
        © {currentYear} StackBro™ . All Rights Reserved.
      </span>
    </footer>
  );
};

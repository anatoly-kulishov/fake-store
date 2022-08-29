import React, { FC } from 'react';

import { IChildren } from '@/shared/types';

import Header from './header';
import Footer from './footer';

const Layout: FC<IChildren> = ({ children }) => {
  return (
    <div className="layout bg-gray-100">
      <Header />
      <main className="main" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

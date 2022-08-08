import React, { FC } from 'react';

import Header from './header';
import Footer from './footer';

const Layout: FC = ({ children }) => {
  return (
    <div className="layout bg-gray-100">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

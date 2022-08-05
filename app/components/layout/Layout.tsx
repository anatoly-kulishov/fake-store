import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Header from './header';
import Footer from './footer';

const Layout: FC = ({ children }) => {
  const { route } = useRouter();
  const isAuthPage = route === '/auth'; // Todo: Replace that!

  if (isAuthPage) {
    return (
      <div className="layout">
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import * as React from 'react';
import { FC } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: FC = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

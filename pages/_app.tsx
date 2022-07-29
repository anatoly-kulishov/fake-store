import React from 'react';
import { AppProps } from 'next/app';

import Layout from '../components/Layout/Layout';

import '../styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

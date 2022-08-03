import React from 'react';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/layout';
import '@/assets/styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <NextNProgress
        color="#5a67d8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        nonce="my-nonce"
        options={{ easing: 'ease', speed: 500 }}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

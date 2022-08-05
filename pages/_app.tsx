import React from 'react';
import { AppProps } from 'next/app';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import MainProvider from '@/providers/MainProvider';
import '@/assets/styles/global.scss';

type TypeAppProps = AppProps & TypeComponentAuthFields;

const MyApp = ({ Component, pageProps }: TypeAppProps | any) => {
  return (
    <MainProvider Component={Component}>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default MyApp;

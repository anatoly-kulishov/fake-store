import React from 'react';
import { AppProps } from 'next/app';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import MainProvider from '@/providers/MainProvider';
import '@/assets/styles/global.scss';
import { IChildren } from '@/shared/types';

type TypeAppProps = AppProps & TypeComponentAuthFields & IChildren;

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <MainProvider Component={Component}>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default MyApp;

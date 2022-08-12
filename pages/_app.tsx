import React from 'react';
import { AppProps } from 'next/app';

import ErrorBoundary from '@/components/shared/error-boundary';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import MainProvider from '@/providers/MainProvider';
import { IChildren } from '@/shared/types';
import '@/assets/styles/global.scss';

type TypeAppProps = AppProps & TypeComponentAuthFields & IChildren;

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <ErrorBoundary>
      <MainProvider Component={Component}>
        <Component {...pageProps} />
      </MainProvider>
    </ErrorBoundary>
  );
};

export default MyApp;

import React from 'react';
import { AppProps } from 'next/app';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import ErrorBoundary from '@/components/ui/error-boundary';
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

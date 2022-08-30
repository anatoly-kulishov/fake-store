import React from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import ym, { YMInitializer } from 'react-yandex-metrika';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import ErrorBoundary from '@/components/ui/error-boundary';
import MainProvider from '@/providers/MainProvider';
import { IChildren } from '@/shared/types';

import '@/assets/styles/global.scss';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

type TypeAppProps = AppProps & TypeComponentAuthFields & IChildren;

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <ErrorBoundary>
      <MainProvider Component={Component}>
        <YMInitializer accounts={[]} options={{ webvisor: true, defer: true }} version="2" />
        <Component {...pageProps} />
      </MainProvider>
    </ErrorBoundary>
  );
};

export default MyApp;

import React, { FC } from 'react';
import NextProgressBar from 'nextjs-progressbar';
import Head from 'next/head';

import { accentColor } from '@/configs/constants';
import { IChildren } from '@/shared/types';

import Favicons from './Favicons';

// Router.events.on('routeChangeComplete', (url: string) => {
//   if (typeof window !== 'undefined') {
//     ym('hit', url);
//   }
// });

const HeadProvider: FC<IChildren & { route: string }> = ({ children, route }) => {
  return (
    <>
      <NextProgressBar color={accentColor} startPosition={0.3} stopDelayMs={200} height={3} />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
        <Favicons />
        <meta name="theme-color" content={accentColor} />
        <meta name="msapplication-navbutton-color" content={accentColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={accentColor} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}${route}`} />
        <link rel="preconnect" href="https://mc.yandex.ru" />
      </Head>
      <>
        {/* <YMInitializer accounts={[90161321]} options={{ webvisor: true, defer: true }} version="2" /> */}
        {children}
      </>
    </>
  );
};

export default HeadProvider;

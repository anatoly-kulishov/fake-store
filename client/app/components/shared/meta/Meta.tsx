import React, { FC } from 'react';
import Head from 'next/head';

import { titleMerge } from '@/configs/seo.config';
import { ISeo } from '@/shared/types/meta.types';
import { IChildren } from '@/shared/types';

export const Meta: FC<ISeo & IChildren> = ({
  children,
  title = 'Default title',
  description = 'Default description',
  keywords = 'Default keywords',
  author = 'Default author',
  type = 'article',
}) => (
  <>
    <Head>
      <title>{titleMerge(title)}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={titleMerge('')} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </Head>
    {children}
  </>
);

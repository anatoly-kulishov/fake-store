import React, { FC } from 'react';
import Head from 'next/head';

import { ISeo } from '@/shared/types/meta.types';
import { titleMerge } from '@/configs/seo.config';

export const Meta: FC<ISeo> = ({
  children,
  title = 'This is the default title',
  description = 'This is the default description',
  keywords = 'This is the default keywords',
  author = 'This is the default author',
}) => (
  <>
    <Head>
      <title>{titleMerge(title)}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={description} />}
    </Head>
    {children}
  </>
);

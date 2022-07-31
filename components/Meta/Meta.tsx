import * as React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
};

const Meta: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  description = 'This is the default description',
  keywords = 'This is the default keywords',
  author = 'This is the default author',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={description} />}
      <link rel="shortcut icon" href="/public/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Meta;

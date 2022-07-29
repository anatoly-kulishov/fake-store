import * as React from 'react';
import { NextPage } from 'next';

import MetaLayout from '../components/MetaLayout/MetaLayout';
import MainHero from '../components/MainHero/MainHero';

const IndexPage: NextPage = () => {
  return (
    <MetaLayout title="Home page">
      <MainHero />
    </MetaLayout>
  );
};

export default IndexPage;

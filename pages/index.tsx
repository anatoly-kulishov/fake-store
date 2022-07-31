import * as React from 'react';
import { NextPage } from 'next';

import Meta from '../components/Meta/Meta';
import MainHero from '../components/MainHero/MainHero';

const IndexPage: NextPage = () => {
  return (
    <Meta title="Home page">
      <MainHero />
    </Meta>
  );
};

export default IndexPage;

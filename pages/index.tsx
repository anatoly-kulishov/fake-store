import React from 'react';
import { NextPage } from 'next';

import MainHero from '../app/components/ui/main-hero';
import Meta from '../app/components/shared/meta';

const IndexPage: NextPage = () => {
  return (
    <Meta title="Home page">
      <MainHero />
    </Meta>
  );
};

export default IndexPage;

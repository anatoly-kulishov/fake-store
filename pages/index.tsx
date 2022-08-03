import React from 'react';
import { NextPage } from 'next';

import Meta from '@/components/shared/meta';
import MainHero from '@/components/ui/main-hero';

const IndexPage: NextPage = () => {
  return (
    <Meta title="Home page">
      <MainHero />
    </Meta>
  );
};

export default IndexPage;

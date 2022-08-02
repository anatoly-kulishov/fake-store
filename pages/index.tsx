import React from 'react';
import { NextPage } from 'next';

import Meta from '../app/components/shared/meta';

import MainHero from '@/ui/main-hero';

const IndexPage: NextPage = () => {
  return (
    <Meta title="Home page">
      <MainHero />
    </Meta>
  );
};

export default IndexPage;

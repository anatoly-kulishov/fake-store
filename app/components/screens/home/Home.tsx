import React, { FC } from 'react';

import Meta from '@/components/shared/meta';
import MainHero from '@/components/ui/main-hero';

export const Home: FC = () => {
  return (
    <Meta title="Home page">
      <MainHero />
    </Meta>
  );
};

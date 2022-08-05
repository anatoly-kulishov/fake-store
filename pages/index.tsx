import React from 'react';
import { NextPage } from 'next';

import Home from '@/components/screens/home';

const IndexPage: NextPage = props => {
  return <Home {...props} />;
};

export default IndexPage;

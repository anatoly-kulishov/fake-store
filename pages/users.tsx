import * as React from 'react';
import { NextPage } from 'next';

import MetaLayout from '../components/MetaLayout/MetaLayout';

const UsersPage: NextPage = () => {
  return (
    <MetaLayout title="Products page">
      <div className="container p-4">UsersPage</div>
    </MetaLayout>
  );
};

export default UsersPage;

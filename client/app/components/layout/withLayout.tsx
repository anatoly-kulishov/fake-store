import React, { FC } from 'react';

import { TypeRoles } from '@/shared/types/auth.types';

import Layout from './Layout';

function withLayout<WCP>(WrappedComponent: FC<WCP> & TypeRoles) {
  return (props: WCP) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}

export default withLayout;

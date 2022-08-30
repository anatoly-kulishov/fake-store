import React, { FC } from 'react';

import Meta from '@/components/shared/meta';
import Search from '@/components/ui/form-elements/search';
import DefaultForm from '@/components/ui/form-elements/default-form';

export const UIKit: FC = () => {
  return (
    <Meta title="UIKit">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl tracking-tight font-bold text-center mb-2">UIKit</h1>
        <hr className="border-2 border-indigo-600 mb-3" />
        <DefaultForm />
        <hr className="border-2 border-indigo-600 opacity-75 my-4" />
        <div className="inline-flex mb-4">
          <Search />
        </div>
      </div>
    </Meta>
  );
};

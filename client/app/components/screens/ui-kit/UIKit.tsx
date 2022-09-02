import React, { FC } from 'react';

import DefaultButtons from '@/components/templates/default-buttons';
import DefaultForm from '@/components/templates/default-form';
import Meta from '@/components/shared/meta';
import Search from '@/components/ui/search';

export const UIKit: FC = () => {
  return (
    <Meta title="UIKit">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl tracking-tight font-bold text-center mb-2">UIKit</h1>
        <hr className="border-2 border-indigo-600 mb-4" />
        <DefaultButtons />
        <hr className="border-2 border-indigo-600 mt-5 mb-4" />
        <div className="grid grid-cols-2 grid-rows-1">
          <div>
            <h2 className="text-lg font-medium mb">Form</h2>
            <DefaultForm />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-5">Search</h2>
            <Search />
          </div>
        </div>
        <hr className="border-2 border-indigo-600 opacity-75 mb-4" />
      </div>
    </Meta>
  );
};

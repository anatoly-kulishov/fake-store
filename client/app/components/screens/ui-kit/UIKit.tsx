import React, { FC } from 'react';

import Meta from '@/components/shared/meta';
import Input from '@/components/ui/form-elements/input';
import Textarea from '@/components/ui/form-elements/textarea';
import Search from '@/components/ui/form-elements/search/Search';

export const UIKit: FC = () => {
  return (
    <Meta title="UIKit">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl tracking-tight font-bold text-center mb-2">UIKit</h1>
        <hr className="border-2 border-indigo-600 mb-3" />
        <div>
          <span className="block mb-2 text-lg font-medium">Input</span>
          <Input type="text" placeholder="Enter here..." />
        </div>
        <hr className="border-2 border-indigo-600 opacity-75 my-4" />
        <div>
          <span className="block mb-2 text-lg font-medium">Textarea</span>
          <Textarea placeholder="Enter here..." />
        </div>
        <hr className="border-2 border-indigo-600 opacity-75 my-4" />
        <div>
          <span className="block mb-2 text-lg font-medium">Search</span>
          <Search />
        </div>
      </div>
    </Meta>
  );
};

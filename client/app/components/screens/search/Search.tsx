import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Meta from '@/components/shared/meta';
import SadSmileIcon from '@/components/shared/icons/SadSmileIcon';
import { mappedErrorResponseStatusIndex } from '@/shared/types';

import { Button } from '../../ui/button/Button';

export const Search: FC = () => {
  const { query, back } = useRouter();

  return (
    <Meta title="Search">
      <div className="container mx-auto py-8">
        Search: <span className="font-medium">{query.q}</span>
        <div className="my-8">
          <p>{mappedErrorResponseStatusIndex['404']}</p>
          <SadSmileIcon size={100} className="mt-4" />
        </div>
        <Button appearance="ghost" onClick={back}>
          Back
        </Button>
      </div>
    </Meta>
  );
};

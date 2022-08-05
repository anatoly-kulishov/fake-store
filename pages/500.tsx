import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Meta from '@/components/shared/meta';
import Heading from '@/components/ui/heading';
import { smthWentWrong } from '@/configs/constants';

const Error: FC = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.push('/');
  };

  return (
    <Meta title="500">
      <div className="flex-center-center p-3 text-center min-h-full">
        <div>
          <Heading text="500" />
          <Heading tag="h2" text={smthWentWrong} />
          <div className="block mt-2">
            <span className="text-link" onClick={goBackHandler}>
              Go Home
            </span>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Error;

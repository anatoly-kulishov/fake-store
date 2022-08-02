import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import Meta from '../app/components/shared/meta';
import Heading from '../app/components/ui/heading';

import { smthWentWrong } from '@/shared/constants';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Meta title="Error">
      <div className="flex-center-center p-3 text-center min-h-full">
        <div>
          <Heading text="404" />
          <Heading tag="h2" text={smthWentWrong} />
        </div>
      </div>
    </Meta>
  );
};

export default Error;

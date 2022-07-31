import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import Meta from '../app/components/shared/meta';
import Heading from '../app/components/ui/heading';
import { smthWentWrong } from '../app/shared/constants';
import styles from '../app/assets/styles/404.module.scss';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Meta title="Error">
      <div className={styles.Wrapper}>
        <div>
          <Heading text="404" />
          <Heading tag="h2" text={smthWentWrong} />
        </div>
      </div>
    </Meta>
  );
};

export default Error;

import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import MetaLayout from '../components/MetaLayout/MetaLayout';
import Heading from '../components/ui/Heading/Heading';
import { smthWentWrong } from '../configs/constants';
import styles from '../styles/404.module.scss';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <MetaLayout title="Error">
      <div className={styles.wrapper}>
        <div>
          <Heading text="404" />
          <Heading tag="h2" text={smthWentWrong} />
        </div>
      </div>
    </MetaLayout>
  );
};

export default Error;

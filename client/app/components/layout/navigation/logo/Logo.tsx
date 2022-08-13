import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AppRoutesEnum } from '@/shared/types/routes.types';
import { LOGO_URL, SITE_TITLE } from '@/configs/constants';

export const Logo: FC = () => {
  return (
    <div className="flex items-center flex-shrink-0">
      <Link href={AppRoutesEnum.HOME} passHref>
        <>
          <Image src={LOGO_URL} className="h-8 w-8 cursor-pointer" width={32} height={32} alt={SITE_TITLE} />
        </>
      </Link>
    </div>
  );
};

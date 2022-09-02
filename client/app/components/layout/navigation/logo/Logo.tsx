import React, { FC } from 'react';
import Link from 'next/link';

import { AppRoutesEnum } from '@/shared/types/routes.types';
import LogoIcon from '@/components/shared/icons/LogoIcon';

export const Logo: FC = () => {
  return (
    <Link href={AppRoutesEnum.HOME}>
      <a className="flex items-center flex-shrink-0" aria-label="Logotype">
        <LogoIcon className="h-8 w-8 cursor-pointer" width={32} height={32} />
      </a>
    </Link>
  );
};

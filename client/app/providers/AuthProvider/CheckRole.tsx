import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import { AppRoutesEnum } from '@/shared/types/routes.types';
import { IChildren } from '@/shared/types';

const CheckRole: FC<TypeComponentAuthFields & IChildren> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
  const { owner } = useAuth();
  const router = useRouter();

  const Children = () => <>{children}</>;

  if (!isOnlyAdmin && !isOnlyUser) return <Children />;

  if (owner?.isAdmin) return <Children />;

  if (isOnlyAdmin) {
    router.pathname !== '/404' && router.replace('/404');
    return null;
  }

  const isUser = owner && !owner.isAdmin;

  if (isUser && isOnlyUser) return <Children />;

  router.pathname !== AppRoutesEnum.AUTH && router.replace(AppRoutesEnum.AUTH);

  return null;
};

export default CheckRole;

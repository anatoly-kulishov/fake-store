import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import { useActions } from '@/hooks/useActions';
import { IChildren } from '@/shared/types';
import { checkAuthAC } from '@/store/auth/auth.actions';
import { useAuth } from '@/hooks/useAuth';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<TypeComponentAuthFields & IChildren> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser },
}) => {
  const { owner } = useAuth();
  const { logoutAC } = useActions();
  const { pathname } = useRouter();

  // In current API, not available access/refresh
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) checkAuthAC();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken && owner) logoutAC();
  }, [logoutAC, pathname, owner]);

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
  );
};

export default AuthProvider;

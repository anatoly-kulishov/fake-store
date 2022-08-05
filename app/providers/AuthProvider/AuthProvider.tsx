import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
  const { user } = useAuth();
  const { checkAuthAC, logoutAC } = useActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) checkAuthAC();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken && user) logoutAC();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    // @ts-ignore
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
  );
};

export default AuthProvider;

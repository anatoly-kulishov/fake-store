import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { AppRoutesEnum } from '@/shared/types/routes.types';

export const useAuthRedirect = () => {
  const { user } = useAuth();
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : AppRoutesEnum.HOME;

  useEffect(() => {
    if (user?.token) push(redirect);
  }, [user, redirect, push]);
};

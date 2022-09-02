import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AppRoutesEnum } from '@/shared/types/routes.types';
import { useAuth } from '@/hooks/useAuth';

export const useAuthRedirect = () => {
  const { owner } = useAuth();
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : AppRoutesEnum.HOME;

  useEffect(() => {
    if (owner?.token) push(redirect);
  }, [owner, redirect, push]);
};

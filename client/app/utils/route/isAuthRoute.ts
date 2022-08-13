import { AppRoutesEnum } from '@/shared/types/routes.types';

export const isAuthRoute = (route: string): boolean => {
  return route === AppRoutesEnum.AUTH;
};

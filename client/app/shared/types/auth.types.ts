import { NextPage } from 'next';

import { IChildren } from '@/shared/types/index';

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean };

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles & IChildren;

export type TypeComponentAuthFields = { Component: TypeRoles };

export interface ILoginFormData {
  username: string;
  password: string;
}

import { NextPage } from 'next';

import { IChildren } from '@/shared/types/index';

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean };

export type NextPageAuth<P = object> = NextPage<P> & TypeRoles & IChildren;

export type TypeComponentAuthFields = { Component: TypeRoles };

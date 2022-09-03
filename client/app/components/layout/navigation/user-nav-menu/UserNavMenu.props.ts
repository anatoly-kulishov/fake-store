import { ElementType, ReactNode } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';

export interface IUserNavMenuProps {
  menuAs: ElementType | undefined;
  children: ReactNode;
  username: string;
  userNavigation: IUserNavMenuItem[];
}

export interface IUserNavMenuItem {
  name: string;
  href: string;
  callback?: AsyncThunk<void, void, object>;
}

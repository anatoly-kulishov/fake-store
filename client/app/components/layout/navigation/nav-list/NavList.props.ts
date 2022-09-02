import { Undetectable } from '@/shared/types';

export interface INavListProps {
  pathname: string;
  isAdmin: Undetectable<boolean>;
}

export type INavListMenu = INavListItem[];

export interface INavListItem {
  id: number;
  name: string;
  submenuId?: string;
  href: string;
  current: boolean;
  isAvailable: boolean;
}

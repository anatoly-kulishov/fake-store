import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import CloseIcon from '@/components/shared/icons/CloseIcon';
import MenuIcon from '@/components/shared/icons/MenuIcon';
import UpIcon from '@/components/shared/icons/UpIcon';

export const icons = {
  up: UpIcon,
  close: CloseIcon,
  menu: MenuIcon,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: 'primary' | 'white';
}

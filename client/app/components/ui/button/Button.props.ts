import { DetailedHTMLProps, ReactNode } from 'react';

import { IButton } from '@/shared/types';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<IButton, HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  children: ReactNode;
  appearance: 'primary' | 'ghost' | 'danger' | 'warning';
  arrow?: 'right' | 'down' | 'none';
}

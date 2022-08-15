import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IBreadcrumbPath } from '@/shared/types';

export interface IBreadcrumbProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  startPath: IBreadcrumbPath;
  paths: IBreadcrumbPath[];
  endPath: string;
}

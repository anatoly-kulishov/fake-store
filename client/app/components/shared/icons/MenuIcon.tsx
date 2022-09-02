import React, { FC } from 'react';

import { DEFAULT_ICONS_SIZE } from '@/configs/constants';
import { IconComponent } from '@/shared/types';

const MenuIcon: FC<IconComponent> = ({ size = DEFAULT_ICONS_SIZE, ...rest }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <rect width="20" height="3" rx="1.5" fill="#7653FC" />
      <rect y="7" width="20" height="3" rx="1.5" fill={rest.fill} />
      <rect y="14" width="20" height="3" rx="1.5" fill={rest.fill} />
    </svg>
  );
};

export default MenuIcon;

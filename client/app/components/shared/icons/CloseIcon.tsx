import React, { FC } from 'react';

import { DEFAULT_ICONS_SIZE } from '@/configs/constants';
import { IconComponent } from '@/shared/types';

const SearchIcon: FC<IconComponent> = ({ size = DEFAULT_ICONS_SIZE, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect y="16.5104" width="23" height="3" rx="1.5" transform="rotate(-45 0 16.5104)" fill={props.fill} />
      <rect x="2.25305" width="23" height="3" rx="1.5" transform="rotate(45 2.25305 0)" fill={props.fill} />
    </svg>
  );
};

export default SearchIcon;

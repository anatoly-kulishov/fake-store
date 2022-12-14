import React, { FC } from 'react';

import { DEFAULT_ICONS_SIZE } from '@/configs/constants';
import { IconComponent } from '@/shared/types';

const AvatarIcon: FC<IconComponent> = ({ size = DEFAULT_ICONS_SIZE, ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} version="1" {...rest}>
      <circle fill="#00100f" opacity={0.2} cx="16" cy="17" r="14" />
      <circle fill="#5294E2" cx="16" cy="16" r="14" />
      <g opacity={0.2} transform="translate(0,1)">
        <path d="m 16,6 c -2.2096,0 -4,1.7912 -4,4 0,2.2088 1.7904,4 4,4 2.2096,0 4,-1.7912 4,-4 0,-2.2088 -1.7904,-4 -4,-4 z" />
        <path d="m 16,16.000001 c -6.9993,0.0042 -7,4.430769 -7,4.430769 v 1.8 c 0,0 1.292299,2.76923 7,2.76923 5.707701,0 7,-2.76923 7,-2.76923 v -1.8 c 0,0 0,-4.433538 -6.9986,-4.430769 z" />
      </g>
      <g>
        <path
          fill="#ffffff"
          d="m 16,6 c -2.2096,0 -4,1.7912 -4,4 0,2.2088 1.7904,4 4,4 2.2096,0 4,-1.7912 4,-4 0,-2.2088 -1.7904,-4 -4,-4 z"
        />
        <path
          fill="#ffffff"
          d="m 16,16.000001 c -6.9993,0.0042 -7,4.430769 -7,4.430769 v 1.8 c 0,0 1.292299,2.76923 7,2.76923 5.707701,0 7,-2.76923 7,-2.76923 v -1.8 c 0,0 0,-4.433538 -6.9986,-4.430769 z"
        />
      </g>
      <path
        fill="#ffffff"
        opacity={0.2}
        d="M 16 2 A 14 14 0 0 0 2 16 A 14 14 0 0 0 2.0214844 16.585938 A 14 14 0 0 1 16 3 A 14 14 0 0 1 29.978516 16.414062 A 14 14 0 0 0 30 16 A 14 14 0 0 0 16 2 z"
      />
    </svg>
  );
};

export default AvatarIcon;

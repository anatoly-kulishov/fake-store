import React, { FC } from 'react';

import { IHeadingProps } from '@/components/ui/heading/Heading.props';

export const Heading: FC<IHeadingProps> = ({ tag, text, className, ...props }) => {
  const Tag = tag || 'h1';
  return (
    <Tag className={`max-w-full ${className}`} {...props}>
      {text}
    </Tag>
  );
};

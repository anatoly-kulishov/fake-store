import React, { FC } from 'react';

import { IHeadingProps } from '@/components/ui/heading/Heading.props';

export const Heading: FC<IHeadingProps> = ({ tag, text, className, ...rest }) => {
  const Tag = tag || 'h1';
  return (
    <Tag className={`max-w-full ${className}`} {...rest}>
      {text}
    </Tag>
  );
};

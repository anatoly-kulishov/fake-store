import React, { FC } from 'react';

interface IHeadingProps {
  text: string | React.ReactElement;
  tag?: string | React.ElementType;
  classes?: string;
}

export const Heading: FC<IHeadingProps> = ({ tag, text, classes }) => {
  const Tag = tag || 'h1';
  return <Tag className={`max-w-full ${classes}`}>{text}</Tag>;
};

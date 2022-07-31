import React, { FC } from 'react';

interface IHeadingProps {
  text: string | React.ReactElement;
  tag?: string | React.ElementType;
}

export const Heading: FC<IHeadingProps> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};

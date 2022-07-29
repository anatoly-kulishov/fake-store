import * as React from 'react';
import { FC } from 'react';

interface IHeading {
  text: string | React.ReactElement;
  tag?: string | React.ElementType;
}

const Heading: FC<IHeading> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default Heading;

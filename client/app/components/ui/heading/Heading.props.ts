import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  text: string | React.ReactElement;
  tag?: string | React.ElementType;
}

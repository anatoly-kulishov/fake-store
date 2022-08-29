import React, { FC } from 'react';
import cn from 'classnames';

import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};

Textarea.displayName = 'Textarea';

export default Textarea;

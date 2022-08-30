import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import styles from '@/components/ui/form-elements/input/Input.module.scss';

import { TextareaProps } from './Textarea.props';

const Textarea = forwardRef(
  ({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <textarea
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

export default Textarea;

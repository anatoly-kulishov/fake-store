import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

const Input = forwardRef(
  ({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <input
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
export default Input;
import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { IField } from '@/components/ui/form-elements/input/Input.props';

import styles from './Input.module.scss';

const Input = forwardRef(
  ({ className, error, label, ...rest }: IField, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <label>
          {label && <span className="block text-sm mb-1">{label}</span>}
          <input
            className={cn(styles.input, {
              [styles.error]: error,
            })}
            ref={ref}
            {...rest}
          />
        </label>
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;

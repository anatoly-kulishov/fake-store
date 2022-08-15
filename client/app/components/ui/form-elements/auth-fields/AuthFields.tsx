import React, { FC } from 'react';

import { IAuthFields } from '@/components/ui/form-elements/auth-fields/AuthFields.props';
import Field from '@/components/ui/form-elements/Field';
import { validUsername } from '@/shared/regex';

export const AuthFields: FC<IAuthFields> = ({ register, formState: { errors }, isPasswordRequired = false }) => {
  return (
    <>
      <div className="mb-5">
        <Field
          {...register('username', {
            required: 'Username is required!',
            pattern: {
              value: validUsername,
              message: 'Please enter a valid username',
            },
          })}
          placeholder="Username"
          error={errors.username}
        />
      </div>
      <div className="mb-6">
        <Field
          {...register(
            'password',
            isPasswordRequired
              ? {
                  required: 'Password is required!',
                  // pattern: {
                  //   value: validPasswordSecurity,
                  //   message: 'Please enter a valid password',
                  // },
                  minLength: {
                    value: 6,
                    message: 'Min length should more 6 symbols!',
                  },
                }
              : {},
          )}
          placeholder="Password"
          type="password"
          error={errors.password}
        />
      </div>
    </>
  );
};

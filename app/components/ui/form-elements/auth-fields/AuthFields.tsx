import React, { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import { IAuthInput } from '@/components/screens/auth/auth.interface';
import Field from '@/components/ui/form-elements/Field';
import { validUsername } from '@/shared/regex';

interface IAuthFields {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  formState: FormState<IAuthInput>;
  isPasswordRequired?: boolean;
}

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

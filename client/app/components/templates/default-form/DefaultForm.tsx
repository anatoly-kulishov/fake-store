import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Input from '@/components/ui/form-elements/input';
import Textarea from '@/components/ui/form-elements/textarea';
import Rating from '@/components/ui/form-elements/raiting';
import { UIKitForm } from '@/components/screens/ui-kit/UIKit.props';
import Button from '@/components/ui/button';

export const DefaultForm: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UIKitForm>();

  const onSubmit = async (formData: UIKitForm) => {
    // eslint-disable-next-line no-console
    console.log(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex my-6">
        <Input
          {...register('firstname', { required: { value: true, message: 'Required' } })}
          error={errors.firstname}
          placeholder="Firstname"
          aria-invalid={!!errors.firstname}
          className="mr-2"
        />
        <Input
          {...register('lastname', { required: { value: true, message: 'Required' } })}
          error={errors.lastname}
          placeholder="Lastname"
          aria-invalid={!!errors.lastname}
        />
      </div>
      <div className="flex mb-6">
        <Input
          {...register('email', { required: { value: true, message: 'Required' } })}
          error={errors.email}
          placeholder="E-mail"
          aria-invalid={!!errors.email}
          className="mr-2"
        />
        <Input
          {...register('phone', { required: { value: true, message: 'Required' } })}
          error={errors.phone}
          placeholder="Phone number"
          aria-invalid={!!errors.phone}
        />
      </div>
      <div className="flex items-end mb-6">
        <Textarea
          {...register('message', { required: false })}
          error={errors.message}
          placeholder="Message"
          aria-invalid={!!errors.message}
          className="mr-6"
        />
        <div>
          <span className="block text-sm font-medium mb-2">Rating:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Specify the rating' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
      </div>
      <div className="mb-6">
        <Button appearance="primary">Submit</Button>
      </div>
    </form>
  );
};

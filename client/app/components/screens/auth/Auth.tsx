import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect';
import { IAuthInput } from '@/components/screens/auth/auth.interface';
import AuthFields from '@/components/ui/form-elements/auth-fields';
import { useActions } from '@/hooks/useActions';
import Meta from '@/components/shared/meta';
import Button from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading, randomUser } = useAuth();
  const { loginAC, getRandomUserAC, clearRandomUserAC } = useActions();

  const getRandomUserHandler = () => {
    getRandomUserAC();
  };

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
    setValue,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthInput> = data => {
    loginAC({ username: data.username, password: data.password });
    clearRandomUserAC();
    reset();
  };

  useEffect(() => {
    if (randomUser) {
      setValue('username', randomUser.username);
      setValue('password', randomUser.password);
    }
  }, [randomUser, setValue]);

  return (
    <Meta title="Authentication">
      <section className="bg-gray-100">
        <div className="h-screen container mx-auto max-w-4xl">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <Image
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  width={488}
                  height={325}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="xl:ml-1 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 pt-8 pl-2">
                <form onSubmit={handleSubmit(onSubmit)} role="form">
                  <div className="flex justify-center lg:justify-start mb-3">
                    <p className="text-2xl font-bold mb-0 mr-4">Sign in</p>
                  </div>
                  <AuthFields register={registerInput} formState={formState} isPasswordRequired />
                  <div className="text-center lg:text-left">
                    <Button appearance="primary" type="submit" disabled={isLoading} className="mr-2">
                      Login
                    </Button>
                    <Button appearance="warning" type="button" onClick={getRandomUserHandler} disabled={isLoading}>
                      Random user
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Meta>
  );
};

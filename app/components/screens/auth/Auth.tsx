import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

import Meta from '@/components/shared/meta';
import AuthFields from '@/components/ui/form-elements/auth-fields';
import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect';
import { IAuthInput } from '@/components/screens/auth/auth.interface';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';

export const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();
  const { loginAC } = useActions();

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthInput> = data => {
    loginAC({ username: data.username, password: data.password });
    reset();
  };

  return (
    <Meta title="Authentication">
      <section className="h-screen container mx-auto max-w-5xl bg-gray-100">
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
            <div className="xl:ml-1 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 pt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center lg:justify-start mb-3">
                  <p className="text-2xl font-bold mb-0 mr-4">Sign in</p>
                </div>
                <AuthFields register={registerInput} formState={formState} isPasswordRequired />
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-block px-5 py-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Meta>
  );
};

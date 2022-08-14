import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Meta from '@/components/shared/meta';
import Heading from '@/components/ui/heading';
import SadSmileIcon from '@/components/shared/icons/SadSmileIcon';
import { addSeparator } from '@/utils/string/addSeparator';
import { ErrorResponseStatusEnum } from '@/shared/types';

interface IError {
  code: string | number;
  text: string;
}

export const Error: FC<IError> = ({ code, text }) => {
  const router = useRouter();
  const stringCode = String(code);
  const isCatchesError: boolean = code === ErrorResponseStatusEnum.STH_WENT_WRONG;

  const goBackHandler = () => {
    router.back();
  };

  const reloadHandler = () => {
    router.reload();
  };

  return (
    <Meta title={stringCode}>
      <div className="flex flex-1 justify-center items-center w-full text-center">
        <div className="pb-10">
          <div className="justify-center">
            <div className="m-auto text-center">
              <SadSmileIcon size="250px" />
              <div className="tracking-widest mt-5">
                <span className="text-gray-500 text-6xl block">
                  {!isCatchesError && <Heading tag="h2" text={addSeparator(stringCode)} />}
                </span>
                <span className="inline-block text-gray-500 text-xl mt-2">{text}</span>
              </div>
            </div>
            <div className="mt-6 p-1 text-center">
              {!isCatchesError ? (
                <span
                  onClick={goBackHandler}
                  className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md cursor-pointer"
                >
                  Go back{' '}
                </span>
              ) : (
                <span
                  onClick={reloadHandler}
                  className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md cursor-pointer"
                >
                  Try again?
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Meta>
  );
};
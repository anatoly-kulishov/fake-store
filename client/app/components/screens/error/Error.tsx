import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { IErrorScreenProps } from '@/components/screens/error/Error.props';
import SadSmileIcon from '@/components/shared/icons/SadSmileIcon';
import { addSeparator } from '@/utils/string/addSeparator';
import { ErrorResponseStatusEnum } from '@/shared/types';
import Heading from '@/components/ui/heading';
import Meta from '@/components/shared/meta';
import { keyEventHandler } from '@/utils/events/keyEventHandler';

export const Error: FC<IErrorScreenProps> = ({ code, text }) => {
  const router = useRouter();
  const stringCode = String(code);
  const isCatchesError: boolean = code === ErrorResponseStatusEnum.STH_WENT_WRONG;

  const reloadHandler = () => router.reload();
  const goBackHandler = () => router.back();

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
                  className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md cursor-pointer"
                  onClick={goBackHandler}
                  onKeyDown={event => keyEventHandler(event.code, goBackHandler)}
                  tabIndex={0}
                >
                  Go back{' '}
                </span>
              ) : (
                <span
                  className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md cursor-pointer"
                  onClick={reloadHandler}
                  onKeyDown={event => keyEventHandler(event.code, reloadHandler)}
                  tabIndex={0}
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

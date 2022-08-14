import React, { FC } from 'react';

import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';
import Error from '@/components/screens/error';

const ErrorPage500: FC = () => {
  return <Error code={ErrorResponseStatusEnum.INTERNAL_SERVER_ERROR} text={mappedErrorResponseStatusIndex['500']} />;
};

export default ErrorPage500;

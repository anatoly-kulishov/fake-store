import React, { FC } from 'react';

import Error from '@/components/screens/error';
import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';

const ErrorPage401: FC = () => {
  return <Error code={ErrorResponseStatusEnum.UNAUTHORIZED} text={mappedErrorResponseStatusIndex['401']} />;
};

export default ErrorPage401;

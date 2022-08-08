import React, { FC } from 'react';

import Error from '@/components/screens/error';
import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';

const ErrorPage400: FC = () => {
  return <Error code={ErrorResponseStatusEnum.BAD_REQUEST} text={mappedErrorResponseStatusIndex['400']} />;
};

export default ErrorPage400;

import React, { FC } from 'react';

import Error from '@/components/screens/error';
import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';

const ErrorPage500: FC = () => {
  return <Error code={ErrorResponseStatusEnum.INTERNAL_SERVER_ERROR} text={mappedErrorResponseStatusIndex['500']} />;
};

export default ErrorPage500;

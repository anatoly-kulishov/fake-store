import React, { FC } from 'react';

import Error from '@/components/screens/error';
import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';

const ErrorPage404: FC = () => {
  return <Error code={ErrorResponseStatusEnum.NOT_FOUND} text={mappedErrorResponseStatusIndex['404']} />;
};

export default ErrorPage404;

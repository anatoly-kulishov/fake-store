import React, { FC } from 'react';

import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';
import Error from '@/components/screens/error';

const ErrorPage404: FC = () => {
  return <Error code={ErrorResponseStatusEnum.NOT_FOUND} text={mappedErrorResponseStatusIndex['404']} />;
};

export default ErrorPage404;

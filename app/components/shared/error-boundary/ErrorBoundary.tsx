import React, { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorResponseStatusEnum, mappedErrorResponseStatusIndex } from '@/shared/types';
import Error from '@/components/screens/error';

import ThrowErrorButton from './throw-error-button';

interface Props {
  devMode?: boolean;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { state, props } = this;
    if (state.hasError) {
      return (
        <div className="flex min-h-screen pb-10">
          <Error
            code={ErrorResponseStatusEnum.STH_WENT_WRONG}
            text={mappedErrorResponseStatusIndex['Something went wrong']}
          />
        </div>
      );
    }

    return (
      <>
        {props?.devMode && (
          <div className="fixed bottom-0 right-0 mr-4 mb-4 z-10">
            <ThrowErrorButton />
          </div>
        )}
        {props.children}
      </>
    );
  }
}

export default ErrorBoundary;

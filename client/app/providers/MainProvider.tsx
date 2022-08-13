import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

import { store } from 'store/store';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import HeadProvider from '@/providers/HeadProvider/HeadProvider';
import AuthProvider from '@/providers/AuthProvider/AuthProvider';
import ReduxToastr from '@/components/ui/redux-toastr/ReduxToastr';
import { isAuthRoute } from '@/utils/route/isAuthRoute';
import Layout from '@/components/layout';
import { IChildren } from '@/shared/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<TypeComponentAuthFields & IChildren> = ({ children, Component }) => {
  const { route } = useRouter();

  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToastr />
          <AuthProvider Component={Component}>
            {isAuthRoute(route) ? <div className="bg-gray-100">{children}</div> : <Layout>{children}</Layout>}
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};

export default MainProvider;

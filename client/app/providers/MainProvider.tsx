import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import ReduxToastr from '@/components/ui/redux-toastr/ReduxToastr';
import HeadProvider from '@/providers/HeadProvider/HeadProvider';
import AuthProvider from '@/providers/AuthProvider/AuthProvider';
import { isAuthRoute } from '@/utils/route/isAuthRoute';
import { IChildren } from '@/shared/types';
import Layout from '@/components/layout';
import { store } from 'store/store';

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
    <HeadProvider route={route}>
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

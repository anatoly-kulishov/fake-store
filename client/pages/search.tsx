import React from 'react';

import { NextPageAuth } from '@/shared/types/auth.types';
import Search from '@/components/screens/search';

const SearchPage: NextPageAuth = () => {
  return <Search />;
};

SearchPage.isOnlyAdmin = true;

export default SearchPage;

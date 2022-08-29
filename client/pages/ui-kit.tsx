import React from 'react';

import { NextPageAuth } from '@/shared/types/auth.types';
import UIKit from '@/components/screens/ui-kit';

const UIKitPage: NextPageAuth = () => {
  return <UIKit />;
};

UIKitPage.isOnlyAdmin = true;

export default UIKitPage;

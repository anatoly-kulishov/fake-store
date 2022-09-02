import { getAuthState } from '@/store/auth/auth.selectors';

import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => useTypedSelector(getAuthState);

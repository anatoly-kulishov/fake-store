import { FormState, UseFormRegister } from 'react-hook-form';

import { IAuthInput } from '@/components/screens/auth/auth.interface';

export interface IAuthFields {
  register: UseFormRegister<IAuthInput>;
  formState: FormState<IAuthInput>;
  isPasswordRequired?: boolean;
}

import { IAuthInput } from '@/components/screens/auth/auth.interface';
import { Nullable } from '@/shared/types';

export interface IAuthState {
  username: string;
  token: string;
  isAdmin?: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IToken {
  token: string;
}

export interface IAuthInitialState {
  owner: Nullable<IAuthState>;
  randomUser: Nullable<IAuthInput>;
  isLoading: boolean;
}

export interface InterfaceEmailPassword {
  username: string;
  password: string;
}

export interface IAuthResponse {
  username: string;
  token: string;
}

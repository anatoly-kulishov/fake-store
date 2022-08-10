import { Nullable } from '@/shared/types';
import { ILoginFormData } from '@/shared/types/auth.types';

export interface IUserState {
  username: string;
  token: string;
  isAdmin?: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserInitialState {
  user: Nullable<IUserState>;
  randomUser: Nullable<ILoginFormData>;
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

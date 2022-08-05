export interface IUserState {
  token: string;
  isAdmin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface InterfaceEmailPassword {
  username: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
}

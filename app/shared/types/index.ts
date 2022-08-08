export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptchaEnum {
  CaptchaIsRequired = 10,
}

export interface IBaseResponse {
  resultCode: ResultCodesEnum;
  messages: string[];
  data: {};
}

export interface IAPIResponseType<D = {}, RC = ResultCodesEnum> {
  data: D;
  resultCode: RC;
  messages: string[];
}

export interface IconComponent {
  size?: number | string;
}

export interface IBreadcrumbPath {
  title: string;
  href: string;
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export enum ErrorResponseStatusEnum {
  INTERNAL_SERVER_ERROR = 500,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
}

export const mappedErrorResponseStatusIndex: Record<ErrorResponseStatusEnum, string> = {
  [ErrorResponseStatusEnum.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [ErrorResponseStatusEnum.NOT_FOUND]: "Sorry, We couldn't find what you are looking for!",
  [ErrorResponseStatusEnum.UNAUTHORIZED]: 'Unauthorized',
  [ErrorResponseStatusEnum.BAD_REQUEST]: 'Bad request',
};

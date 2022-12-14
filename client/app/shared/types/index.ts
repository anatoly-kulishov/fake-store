import React, { ButtonHTMLAttributes, SVGProps } from 'react';

export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IChildren {
  children?: React.ReactNode;
}

export type IconComponent = {
  size?: number | string;
} & SVGProps<SVGSVGElement>;

export interface IBreadcrumbPath {
  title: string;
  href: string;
}

export enum ErrorResponseStatusEnum {
  STH_WENT_WRONG = 'Something went wrong',
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum KeyCodeEnum {
  ENTER = 'Enter',
  SPACE = 'Space',
}

export const mappedErrorResponseStatusIndex: Record<ErrorResponseStatusEnum, string> = {
  [ErrorResponseStatusEnum.STH_WENT_WRONG]: 'Looks like something went wrong, please try again later.',
  [ErrorResponseStatusEnum.NOT_FOUND]: "Sorry, We couldn't find what you are looking for!",
  [ErrorResponseStatusEnum.INTERNAL_SERVER_ERROR]: 'Server-side error occurred',
};

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export interface IBaseResponse {
  resultCode: ResultCodesEnum;
  messages: string[];
  data: object;
}

export interface IAPIResponseType<D = object, RC = ResultCodesEnum> {
  data: D;
  resultCode: RC;
  messages: string[];
}

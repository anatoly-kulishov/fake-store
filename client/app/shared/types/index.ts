import React, { RefObject } from 'react';

export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IChildren {
  children?: React.ReactNode;
}

export interface IconComponent extends Omit<RefObject<SVGElement>, 'className' | 'id' | 'current'> {
  size?: number | string;
}

export interface IBreadcrumbPath {
  title: string;
  href: string;
}

export enum ErrorResponseStatusEnum {
  STH_WENT_WRONG = 'Something went wrong',
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export const mappedErrorResponseStatusIndex: Record<ErrorResponseStatusEnum, string> = {
  [ErrorResponseStatusEnum.STH_WENT_WRONG]: 'Looks like something went wrong, please try again later.',
  [ErrorResponseStatusEnum.NOT_FOUND]: "Sorry, We couldn't find what you are looking for!",
  [ErrorResponseStatusEnum.INTERNAL_SERVER_ERROR]: 'Server-side error occurred',
};

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

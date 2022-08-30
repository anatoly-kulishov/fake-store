import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export type IField = TypeInputPropsField;

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

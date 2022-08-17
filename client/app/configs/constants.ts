import { Undetectable } from '@/shared/types';

/**
 * API
 */
export const API_URL: Undetectable<string> = `${process.env.NEXT_PUBLIC_API}`;

/**
 * General
 */
export const SITE_TITLE = 'Fake Store';
export const DEFAULT_ICONS_SIZE = '24px';
export const accentColor = '#5a67d8';
export const LOGO_URL: string = 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg';
export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';
export const USER_PHOTO = LOGO_URL;

/**
 * Buttons
 */
export const LOGIN_BUTTON = 'Log in';
export const LOGIN_AS_GUEST_BUTTON = 'Login as guest';
export const CREATE_NEW_ACCOUNT_BUTTON = 'Create New Account';
export const GO_BACK_BUTTON = 'Go Back';
export const REMEMBER_ME_LABEL = 'Remember me';

/**
 * Validations
 */
export const MIN_PASS_LENGTH: number = 8;
export const MIN_SEARCH_LENGTH: number = 3;
export const FILE_SIZE_LIMIT: number = 10;
export const FILE_SIZE_LIMIT_ERROR: string = 'Size must be less 10Mb';
export const ALLOWED_EXTENSIONS_ERROR: string = 'Not allowed format file!';

/**
 * Placeholders
 */
export const EMAIL_PLACEHOLDER = 'Your email';
export const PASSWORD_PLACEHOLDER = 'Your password';
export const CAPTCHA_PLACEHOLDER = 'Symbols from image';

/**
 * Time
 */
export const TIME_FORMATS = {
  POST_ITEM: 'yyyy-MM-dd HH:mm',
  POST_ITEM_FULL: 'yyyy-MM-dd HH:mm:ss',
};

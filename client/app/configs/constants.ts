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
export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';

/**
 * Validations
 */
export const MIN_PASS_LENGTH = 8;
export const MIN_SEARCH_LENGTH = 3;
export const FILE_SIZE_LIMIT = 10;
export const FILE_SIZE_LIMIT_ERROR = 'Size must be less 10Mb';
export const ALLOWED_EXTENSIONS_ERROR = 'Not allowed format file!';

/**
 * Time
 */
export const TIME_FORMATS = {
  POST_ITEM: 'yyyy-MM-dd HH:mm',
  POST_ITEM_FULL: 'yyyy-MM-dd HH:mm:ss',
};

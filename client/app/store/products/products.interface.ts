import { Nullable } from '@/shared/types';

export interface IProductsInitialState {
  categories: Nullable<string[]>;
  isLoading: boolean;
}

export type IProductsResponse = string[];

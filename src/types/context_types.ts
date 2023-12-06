import { TCategoriesType } from './category_types';
import { TIconEntry } from './icon_types';
import { Dispatch, SetStateAction } from 'react';

export type TIconContext = {
  icon?: TIconEntry;
  setIcon?: Dispatch<SetStateAction<TIconEntry | undefined>>;
} | null;

export type TCategoryContext = {
  category?: TCategoriesType;
  setCategory?: Dispatch<SetStateAction<TCategoriesType>>;
} | null;

export type TSearchContext = {
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
} | null;

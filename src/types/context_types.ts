import { TCategoryType } from './category_types';
import { TIconEntry } from './icon_types';
import { Dispatch, SetStateAction } from 'react';

export type TIconContext = {
  iconSelected?: TIconEntry;
  setIconSelected?: Dispatch<SetStateAction<TIconEntry | undefined>>;
} | null;

export type TCategoryContext = {
  categorySelected?: TCategoryType;
  setCategorySelected?: Dispatch<SetStateAction<TCategoryType>>;
} | null;

export type TSearchContext = {
  searchText?: string;
  setSearchText?: Dispatch<SetStateAction<string>>;
} | null;

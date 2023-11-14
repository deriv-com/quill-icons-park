import { TIconEntry } from './icon_types';
import { Dispatch, SetStateAction } from 'react';

export type TIconContext = {
  iconSelected?: TIconEntry;
  setIconSelected?: Dispatch<SetStateAction<TIconEntry | undefined>>;
} | null;

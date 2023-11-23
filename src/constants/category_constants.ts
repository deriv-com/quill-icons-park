import { TCategoryType } from '../types/category_types';

export const CATEGORIES = Object.freeze({
  ALL: 'All',
  CURRENCIES: 'Currencies',
  FLAGS: 'Flags',
  ILLUSTRATIVE: 'Illustrative',
  LABEL_PAIRED: 'Label Paired',
  LOGO: 'Logo',
  MARKETS: 'Markets',
  SOCIAL: 'Social',
  STANDALONE: 'Standalone',
});

export const DEFAULT_CATEGORY: TCategoryType = CATEGORIES.CURRENCIES;

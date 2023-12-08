import { TCategoriesType } from '../types/category_types';

export const CATEGORIES = Object.freeze({
  ALL: 'All',
  CURRENCIES: 'Currencies',
  FLAGS: 'Flags',
  ILLUSTRATIONS: 'Illustrations',
  ILLUSTRATIVE: 'Illustrative',
  LABEL_PAIRED: 'Label Paired',
  LOGO: 'Logo',
  MARKETS: 'Markets',
  SOCIAL: 'Social',
  STANDALONE: 'Standalone',
});

export const DEFAULT_CATEGORY: TCategoriesType = CATEGORIES.CURRENCIES;

export const CATEGORIES_TYPE_A: string[] = [
  CATEGORIES.ALL,
  CATEGORIES.LOGO,
  CATEGORIES.ILLUSTRATIONS,
];

export const CATEGORIES_TYPE_B: string[] = [
  CATEGORIES.ALL,
  CATEGORIES.CURRENCIES,
  CATEGORIES.FLAGS,
  CATEGORIES.ILLUSTRATIVE,
  CATEGORIES.LABEL_PAIRED,
  CATEGORIES.MARKETS,
  CATEGORIES.SOCIAL,
  CATEGORIES.STANDALONE,
];

export const CATEGORY_PROMISES = {
  [CATEGORIES.CURRENCIES]: import('@deriv/quill-icons/Currencies'),
  [CATEGORIES.FLAGS]: import('@deriv/quill-icons/Flags'),
  [CATEGORIES.ILLUSTRATIONS]: import('@deriv/quill-icons/Illustration'),
  [CATEGORIES.ILLUSTRATIVE]: import('@deriv/quill-icons/Illustrative'),
  [CATEGORIES.LABEL_PAIRED]: import('@deriv/quill-icons/LabelPaired'),
  [CATEGORIES.LOGO]: import('@deriv/quill-icons/Logo'),
  [CATEGORIES.MARKETS]: import('@deriv/quill-icons/Markets'),
  [CATEGORIES.SOCIAL]: import('@deriv/quill-icons/Social'),
  [CATEGORIES.STANDALONE]: import('@deriv/quill-icons/Standalone'),
};

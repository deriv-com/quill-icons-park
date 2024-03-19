import { TCategoriesType } from '@deriv/types';

export const CATEGORIES = Object.freeze({
  ALL: 'All',
  ACCOUNTS: 'Accounts',
  CURRENCIES: 'Currencies',
  FLAGS: 'Flags',
  ILLUSTRATIONS: 'Illustrations',
  ILLUSTRATIVE: 'Illustrative',
  LABEL_PAIRED: 'Label Paired',
  LOGO: 'Logo',
  MARKETS: 'Markets',
  SOCIAL: 'Social',
  STANDALONE: 'Standalone',
  PAYMENTMETHODS: 'PaymentMethods',
});

export const CATEGORY_PROMISES = {
  [CATEGORIES.ACCOUNTS]: import('@deriv/quill-icons/Accounts'),
  [CATEGORIES.CURRENCIES]: import('@deriv/quill-icons/Currencies'),
  [CATEGORIES.FLAGS]: import('@deriv/quill-icons/Flags'),
  [CATEGORIES.ILLUSTRATIONS]: import('@deriv/quill-icons/Illustration'),
  [CATEGORIES.ILLUSTRATIVE]: import('@deriv/quill-icons/Illustrative'),
  [CATEGORIES.LABEL_PAIRED]: import('@deriv/quill-icons/LabelPaired'),
  [CATEGORIES.LOGO]: import('@deriv/quill-icons/Logo'),
  [CATEGORIES.MARKETS]: import('@deriv/quill-icons/Markets'),
  [CATEGORIES.SOCIAL]: import('@deriv/quill-icons/Social'),
  [CATEGORIES.STANDALONE]: import('@deriv/quill-icons/Standalone'),
  [CATEGORIES.PAYMENTMETHODS]: import('@deriv/quill-icons/PaymentMethods'),
};

export const DEFAULT_CATEGORY: TCategoriesType = CATEGORIES.ACCOUNTS;

// Supported options:
// 1. Custom icon size like w:120px, h:120px
export const CATEGORIES_TYPE_A: string[] = [
  CATEGORIES.ALL,
  CATEGORIES.LOGO,
  CATEGORIES.ILLUSTRATIONS,
];

// Supported options:
// 1. Icon Fill color
// 2. Predefined icon size like sm, md, lg etc.
export const CATEGORIES_TYPE_B: string[] = [
  CATEGORIES.ALL,
  CATEGORIES.ACCOUNTS,
  CATEGORIES.CURRENCIES,
  CATEGORIES.FLAGS,
  CATEGORIES.ILLUSTRATIVE,
  CATEGORIES.MARKETS,
  CATEGORIES.SOCIAL,
  CATEGORIES.STANDALONE,
  CATEGORIES.PAYMENTMETHODS,
];

import { CATEGORIES } from '@deriv/constants';

export type TCategoriesType = (typeof CATEGORIES)[keyof typeof CATEGORIES];

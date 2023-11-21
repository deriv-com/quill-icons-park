import { CATEGORIES } from '../constants/category_constants';

export type TCategoryType = (typeof CATEGORIES)[keyof typeof CATEGORIES];

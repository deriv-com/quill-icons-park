import { CATEGORIES } from '../constants/category_constants';

export type TCategoriesType = (typeof CATEGORIES)[keyof typeof CATEGORIES];

import { CATEGORIES } from '../constants/categories';
import * as QuillIcons from '@deriv/quill-icons';

export const getIcons = (category = CATEGORIES.ALL, search = '') => {
  return Object.entries(QuillIcons);
};

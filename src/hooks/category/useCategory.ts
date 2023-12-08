import { CATEGORIES } from '@deriv/constants';
import { CategoryContext } from '@deriv/stores';
import { useContext } from 'react';

export const useCategory = () => {
  const categoryContext = useContext(CategoryContext);
  const category = categoryContext?.category;
  const setCategory = categoryContext?.setCategory;
  const hasCategoryAllSelected = category === CATEGORIES.ALL;

  return { category, setCategory, hasCategoryAllSelected };
};

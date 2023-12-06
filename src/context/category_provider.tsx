import { PropsWithChildren, useMemo } from 'react';
import { TCategoriesType } from '../types/category_types';
import { CategoryContext } from './category_context';

type TCategoryProvider = {
  category: TCategoriesType;
  setCategory: React.Dispatch<React.SetStateAction<TCategoriesType>>;
};

const CategoryProvider = ({
  children,
  category: selectedCategory,
  setCategory: setSelectedCategory,
}: PropsWithChildren<TCategoryProvider>) => (
  <CategoryContext.Provider
    value={useMemo(
      () => ({ categorySelected: selectedCategory, setCategorySelected: setSelectedCategory }),
      [selectedCategory, setSelectedCategory],
    )}
  >
    {children}
  </CategoryContext.Provider>
);

export default CategoryProvider;

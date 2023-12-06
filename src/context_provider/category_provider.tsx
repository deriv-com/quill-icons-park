import { PropsWithChildren, useMemo } from 'react';
import { TCategoriesType } from '../types/category_types';
import { CategoryContext } from './category_context';

type TCategoryProvider = {
  category: TCategoriesType;
  setCategory: React.Dispatch<React.SetStateAction<TCategoriesType>>;
};

const CategoryProvider = ({
  children,
  category,
  setCategory,
}: PropsWithChildren<TCategoryProvider>) => (
  <CategoryContext.Provider
    value={useMemo(() => ({ category, setCategory }), [category, setCategory])}
  >
    {children}
  </CategoryContext.Provider>
);

export default CategoryProvider;

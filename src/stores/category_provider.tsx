import { DEFAULT_CATEGORY } from '@deriv/constants';
import { CategoryContext } from '@deriv/stores';
import { TCategoriesType } from '@deriv/types';
import { PropsWithChildren, useMemo, useState } from 'react';

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState<TCategoriesType>(DEFAULT_CATEGORY);

  return (
    <CategoryContext.Provider
      value={useMemo(() => ({ category, setCategory }), [category, setCategory])}
    >
      {children}
    </CategoryContext.Provider>
  );
};

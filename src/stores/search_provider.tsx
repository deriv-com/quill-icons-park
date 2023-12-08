import { SearchContext } from '@deriv/stores';
import { PropsWithChildren, useMemo, useState } from 'react';

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={useMemo(() => ({ search, setSearch }), [search, setSearch])}>
      {children}
    </SearchContext.Provider>
  );
};

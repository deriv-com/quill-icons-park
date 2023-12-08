import { PropsWithChildren, useMemo } from 'react';
import { SearchContext } from './search_context';

type TSearchProvider = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchProvider = ({
  children,
  search,
  setSearch,
}: PropsWithChildren<TSearchProvider>) => (
  <SearchContext.Provider value={useMemo(() => ({ search, setSearch }), [search, setSearch])}>
    {children}
  </SearchContext.Provider>
);

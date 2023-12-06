import { PropsWithChildren, useMemo } from 'react';
import { SearchContext } from './search_context';

type TSearchProvider = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchProvider = ({ children, search, setSearch }: PropsWithChildren<TSearchProvider>) => (
  <SearchContext.Provider
    value={useMemo(() => ({ searchText: search, setSearchText: setSearch }), [search, setSearch])}
  >
    {children}
  </SearchContext.Provider>
);

export default SearchProvider;

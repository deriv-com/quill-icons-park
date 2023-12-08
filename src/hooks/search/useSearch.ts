import { SearchContext } from '@deriv/stores';
import { useContext } from 'react';

export const useSearch = () => {
  const searchContext = useContext(SearchContext);
  const setSearch = searchContext?.setSearch;
  const search = searchContext?.search ?? '';

  return { search, setSearch };
};

import { SearchContext } from '@deriv/stores';
import { useContext } from 'react';

export const useSearch = () => {
  const searchContext = useContext(SearchContext);
  const search = searchContext?.search ?? '';
  const setSearch = searchContext?.setSearch;

  return { search, setSearch };
};

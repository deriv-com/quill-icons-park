import { useContext } from 'react';
import { SearchContext } from '../../../context_provider/search_context';
import { StandaloneSearchBoldIcon } from '@deriv/quill-icons';
import { debouncedStateUpdater } from '../../../utils/text_utils';

const Search = () => {
  const searchContext = useContext(SearchContext);
  const setSearchText = searchContext?.setSearchText;

  return (
    <div className='flex w-full items-center justify-center'>
      <span className='relative flex items-center justify-center'>
        <input
          className='rounded-xl border-2 border-transparent px-4 py-2 shadow-xl outline-none transition-all focus:border-rose-500 sm:min-w-[20rem]'
          type='text'
          onChange={debouncedStateUpdater(setSearchText)}
          placeholder='Search'
        />
        <span className='absolute right-2 opacity-50'>
          <StandaloneSearchBoldIcon />
        </span>
      </span>
    </div>
  );
};

export default Search;

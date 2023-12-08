import { useSearch } from '@deriv/hooks';
import { StandaloneSearchBoldIcon } from '@deriv/quill-icons';
import { debouncedStateUpdater } from '@deriv/utils';

export const Search = () => {
  const { setSearch } = useSearch();

  return (
    <div className='flex w-full items-center justify-center'>
      <span className='relative flex items-center justify-center'>
        <input
          className='rounded-xl border-2 border-transparent px-4 py-2 shadow-xl outline-none transition-all focus:border-rose-500 sm:min-w-[20rem]'
          type='text'
          onChange={debouncedStateUpdater(setSearch)}
          placeholder='Search'
        />
        <span className='absolute right-2 opacity-50'>
          <StandaloneSearchBoldIcon />
        </span>
      </span>
    </div>
  );
};

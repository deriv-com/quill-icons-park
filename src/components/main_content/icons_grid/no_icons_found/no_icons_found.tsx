import { useCategory, useSearch } from '@deriv/hooks';
import { LabelPairedSearchMdBoldIcon } from '@deriv/quill-icons';

export const NoIconsFound = () => {
  const { category } = useCategory();
  const { search } = useSearch();

  return (
    <div className='mt-24 flex flex-col items-center'>
      <LabelPairedSearchMdBoldIcon className='opacity-50' />
      <span>
        <span className='opacity-50'>No result found for your search "</span>
        <span className='font-bold'>{search}</span>
        <span className='opacity-50'>" in </span>
        <span className='font-bold'>{category}</span>
        <span className='opacity-50'> category!</span>
      </span>
    </div>
  );
};

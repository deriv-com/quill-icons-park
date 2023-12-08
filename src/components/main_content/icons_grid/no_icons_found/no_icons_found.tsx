import { useSearch } from '@deriv/hooks';
import { LabelPairedSearchBoldIcon } from '@deriv/quill-icons';

type TNoIconsFound = {
  categorySelected: string;
};

const NoIconsFound = ({ categorySelected }: TNoIconsFound) => {
  const { search } = useSearch();

  return (
    <div className='mt-24 flex flex-col items-center'>
      <LabelPairedSearchBoldIcon className='opacity-50' />
      <span>
        <span className='opacity-50'>No result found for your search "</span>
        <span className='font-bold'>{search}</span>
        <span className='opacity-50'>" in </span>
        <span className='font-bold'>{categorySelected}</span>
        <span className='opacity-50'> category!</span>
      </span>
    </div>
  );
};

export default NoIconsFound;

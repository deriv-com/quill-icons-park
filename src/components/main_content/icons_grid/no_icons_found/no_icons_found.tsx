import { LabelPairedSearchBoldIcon } from '@deriv/quill-icons';

type TNoIconsFound = {
  searchText: string;
  categorySelected: string;
};

const NoIconsFound = ({ searchText, categorySelected }: TNoIconsFound) => (
  <div className='mt-24 flex flex-col items-center'>
    <LabelPairedSearchBoldIcon className='opacity-50' />
    <span>
      <span className='opacity-50'>No result found for your search "</span>
      <span className='font-bold'>{searchText}</span>
      <span className='opacity-50'>" in </span>
      <span className='font-bold'>{categorySelected}</span>
      <span className='opacity-50'> category!</span>
    </span>
  </div>
);

export default NoIconsFound;

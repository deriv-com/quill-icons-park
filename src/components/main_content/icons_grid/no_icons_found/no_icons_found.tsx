import { LabelPairedSearchBoldIcon } from '@deriv/quill-icons';

type TNoIconsFound = {
  searchText: string;
};

const NoIconsFound = ({ searchText }: TNoIconsFound) => (
  <div className='mt-24 flex flex-col items-center'>
    <LabelPairedSearchBoldIcon className='opacity-50' />
    <span>
      <span className='opacity-50'>No result found for your search "</span>
      <span className='font-bold'>{searchText}</span>
      <span className='opacity-50'>" !</span>
    </span>
  </div>
);

export default NoIconsFound;

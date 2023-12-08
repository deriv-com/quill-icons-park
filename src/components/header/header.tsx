import { BrandDerivLogoCoralIcon } from '@deriv/quill-icons/Logo';
import Categories from './categories/categories';
import { Search } from './search/search';

export const Header = () => (
  <div className='sticky top-0 z-50 flex h-44 flex-col items-center justify-center bg-white shadow-md sm:h-32 md:shadow-lg'>
    <div className='grid w-full gap-2 sm:grid-cols-[1fr_2fr_1fr]'>
      <div className='mt-2 flex items-center justify-center gap-2 font-bold sm:mt-0'>
        <BrandDerivLogoCoralIcon width={32} />
        <span className='font-bold'>Quill Icons</span>
      </div>
      <Search />
      <div />
    </div>
    <Categories />
  </div>
);

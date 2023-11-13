import { BrandDerivLogoCoralIcon } from '@deriv/quill-icons/Logo';
import Search from './search/search';

const Header = () => (
  <div className='sticky top-0 flex h-28 items-center bg-white px-8 shadow-sm sm:h-20'>
    <div className='grid w-full gap-2 sm:grid-cols-[1fr_2fr_1fr]'>
      <div className='mt-2 flex items-center justify-center gap-2 font-bold sm:mt-0'>
        <BrandDerivLogoCoralIcon width={32} />
        <span className='font-bold'>Quill Icons</span>
      </div>
      <Search />
      <div />
    </div>
  </div>
);

export default Header;

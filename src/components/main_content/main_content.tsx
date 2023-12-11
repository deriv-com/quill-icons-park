import { IconDetails, IconsGrid } from '@deriv/components';

export const MainContent = () => (
  <div className='flex justify-center'>
    <div className='grid w-full max-w-[84rem] sm:grid-cols-[1fr_1fr] md:grid-cols-[auto_min-content]'>
      <IconsGrid />
      <IconDetails />
    </div>
  </div>
);

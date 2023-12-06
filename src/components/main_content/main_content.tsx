import { useState } from 'react';
import IconDetails from './icon_details/icon_details';
import IconsGrid from './icons_grid/icons_grid';
import { TIconEntry } from '../../types/icon_types';
import IconProvider from '../../context_provider/icon_provider';

const MainContent = () => {
  const [icon, setIcon] = useState<TIconEntry>();

  return (
    <IconProvider icon={icon} setIcon={setIcon}>
      <div className='grid w-full sm:grid-cols-[1fr_1fr] md:grid-cols-[auto_min-content]'>
        <IconsGrid />
        <IconDetails />
      </div>
    </IconProvider>
  );
};

export default MainContent;

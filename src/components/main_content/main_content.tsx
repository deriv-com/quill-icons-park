import { useMemo, useState } from 'react';
import IconDetails from './icon_details/icon_details';
import IconsGrid from './icons_grid/icons_grid';
import { TIconEntry } from '../../types/icon_types';
import { IconContext } from '../../context/icon_context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const MainContent = () => {
  const [iconSelected, setIconSelected] = useState<TIconEntry>();
  const iconContextValue = useMemo(
    () => ({ iconSelected, setIconSelected }),
    [iconSelected, setIconSelected],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider value={iconContextValue}>
        <div className='grid w-full sm:grid-cols-[1fr_1fr] md:grid-cols-[auto_min-content]'>
          <IconsGrid />
          <IconDetails />
        </div>
      </IconContext.Provider>
    </QueryClientProvider>
  );
};

export default MainContent;

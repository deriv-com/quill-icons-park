import { useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main_content/main_content';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DEFAULT_CATEGORY } from '@deriv/constants';
import { TCategoriesType, TIconEntry } from '@deriv/types';
import { CategoryProvider, IconProvider, SearchProvider } from '@deriv/stores';

export const App = () => {
  const queryClient = new QueryClient();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<TCategoriesType>(DEFAULT_CATEGORY);
  const [icon, setIcon] = useState<TIconEntry>();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider search={search} setSearch={setSearch}>
        <CategoryProvider category={category} setCategory={setCategory}>
          <IconProvider icon={icon} setIcon={setIcon}>
            <div className='flex flex-col text-gray-700'>
              <Header />
              <MainContent />
            </div>
          </IconProvider>
        </CategoryProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
};

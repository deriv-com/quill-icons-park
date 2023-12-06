import { useMemo, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main_content/main_content';
import { DEFAULT_CATEGORY } from './constants/category_constants';
import { SearchContext } from './context/search_context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TCategoriesType } from './types/category_types';
import CategoryProvider from './context/category_provider';

const queryClient = new QueryClient();

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState<TCategoriesType>(DEFAULT_CATEGORY);

  const searchContextValue = useMemo(
    () => ({ searchText, setSearchText }),
    [searchText, setSearchText],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={searchContextValue}>
        <CategoryProvider category={category} setCategory={setCategory}>
          <div className='flex flex-col text-gray-700'>
            <Header />
            <MainContent />
          </div>
        </CategoryProvider>
      </SearchContext.Provider>
    </QueryClientProvider>
  );
};

export default App;

import { useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main_content/main_content';
import { DEFAULT_CATEGORY } from './constants/category_constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TCategoriesType } from './types/category_types';
import CategoryProvider from './context_provider/category_provider';
import SearchProvider from './context_provider/search_provider';

const queryClient = new QueryClient();

const App = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<TCategoriesType>(DEFAULT_CATEGORY);

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider search={search} setSearch={setSearch}>
        <CategoryProvider category={category} setCategory={setCategory}>
          <div className='flex flex-col text-gray-700'>
            <Header />
            <MainContent />
          </div>
        </CategoryProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
};

export default App;

import { useMemo, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main_content/main_content';
import { CategoryContext } from './context/category_context';
import { DEFAULT_CATEGORY } from './constants/category_constants';
import { SearchContext } from './context/search_context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [categorySelected, setCategorySelected] = useState(DEFAULT_CATEGORY);

  const searchContextValue = useMemo(
    () => ({ searchText, setSearchText }),
    [searchText, setSearchText],
  );

  const categoryContextValue = useMemo(
    () => ({ categorySelected, setCategorySelected }),
    [categorySelected, setCategorySelected],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={searchContextValue}>
        <CategoryContext.Provider value={categoryContextValue}>
          <div className='flex flex-col text-gray-700'>
            <Header />
            <MainContent />
          </div>
        </CategoryContext.Provider>
      </SearchContext.Provider>
    </QueryClientProvider>
  );
};

export default App;

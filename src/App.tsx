import { useMemo, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main_content/main_content';
import { CategoryContext } from './context/category_context';
import { CATEGORIES } from './constants/categories';
import { SearchContext } from './context/search_context';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [categorySelected, setCategorySelected] = useState(CATEGORIES.CURRENCIES);

  const searchContextValue = useMemo(
    () => ({ searchText, setSearchText }),
    [searchText, setSearchText],
  );

  const categoryContextValue = useMemo(
    () => ({ categorySelected, setCategorySelected }),
    [categorySelected, setCategorySelected],
  );

  return (
    <SearchContext.Provider value={searchContextValue}>
      <CategoryContext.Provider value={categoryContextValue}>
        <div className='flex flex-col text-gray-700'>
          <Header />
          <MainContent />
        </div>
      </CategoryContext.Provider>
    </SearchContext.Provider>
  );
};

export default App;

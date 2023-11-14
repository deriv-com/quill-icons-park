import { useMemo, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main_content/main_content';
import { CategoryContext } from './context/category_context';
import { CATEGORIES } from './constants/categories';

const App = () => {
  const [categorySelected, setCategorySelected] = useState(CATEGORIES.CURRENCIES);
  const categoryContextValue = useMemo(
    () => ({ categorySelected, setCategorySelected }),
    [categorySelected, setCategorySelected],
  );

  return (
    <CategoryContext.Provider value={categoryContextValue}>
      <div className='flex flex-col text-gray-700'>
        <Header />
        <MainContent />
      </div>
    </CategoryContext.Provider>
  );
};

export default App;

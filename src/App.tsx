import { CategoryProvider, IconProvider, ReactQueryProvider, SearchProvider } from '@deriv/stores';
import './App.scss';
import { Header } from './components/header/header';
import { MainContent } from './components/main_content/main_content';

export const App = () => (
  <ReactQueryProvider>
    <SearchProvider>
      <CategoryProvider>
        <IconProvider>
          <div className='flex flex-col text-gray-700'>
            <Header />
            <MainContent />
          </div>
        </IconProvider>
      </CategoryProvider>
    </SearchProvider>
  </ReactQueryProvider>
);

import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main-content/main-content';

const App = () => (
  <div className='flex flex-col text-gray-700'>
    <Header />
    <MainContent />
  </div>
);

export default App;

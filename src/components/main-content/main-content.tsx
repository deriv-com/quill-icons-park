import IconDetails from './icon-details/icon-details';
import IconsGrid from './icons-grid/icons-grid';

const MainContent = () => {
  return (
    <div className='grid h-96 w-full sm:grid-cols-[1fr_1fr] sm:bg-slate-300 md:grid-cols-[3fr_1fr] md:bg-slate-500'>
      <IconsGrid />
      <IconDetails />
    </div>
  );
};

export default MainContent;

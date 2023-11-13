import IconDetails from './icon-details/icon-details';
import IconsGrid from './icons-grid/icons-grid';

const MainContent = () => {
  return (
    <div className='grid h-96 w-full sm:grid-cols-[1fr_1fr] md:grid-cols-[3fr_1fr]'>
      <IconsGrid />
      <IconDetails />
    </div>
  );
};

export default MainContent;

import IconDetails from './icon_details/icon_details';
import IconsGrid from './icons_grid/icons_grid';

const MainContent = () => {
  return (
    <div className='grid w-full sm:grid-cols-[1fr_1fr] md:grid-cols-[3fr_1fr]'>
      <IconsGrid />
      <IconDetails />
    </div>
  );
};

export default MainContent;

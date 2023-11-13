import IconsGrid from './icons-grid/icons-grid';

const MainContent = () => {
  return (
    <div className='grid h-96 w-full grid-cols-[3fr_1fr] sm:bg-slate-300 md:bg-slate-500'>
      <IconsGrid />
    </div>
  );
};

export default MainContent;

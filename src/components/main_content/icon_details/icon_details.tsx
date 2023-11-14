import { useContext } from 'react';
import { IconContext } from '../../../context/icon_context';

const IconDetails = () => {
  const iconContext = useContext(IconContext);
  const iconSelected = iconContext?.iconSelected;
  const Icon = iconSelected?.Icon;

  return (
    <div className='p-4'>
      <div className='sticky top-36 flex flex-col gap-4 rounded-xl p-4 shadow-xl'>
        <span>Icon Details</span>
        <div className='flex items-center justify-center'>{Icon && <Icon />}</div>
      </div>
    </div>
  );
};

export default IconDetails;

import { getIcons } from '../../../utils/icon_utils';
import IconEntry from './icon_entry/icon_entry';

const IconsGrid = () => {
  const icons = getIcons();

  return (
    <div className='grid grid-cols-3 gap-4 p-4 md:grid-cols-6'>
      {icons
        .filter(([iconName, _]) => iconName.endsWith('Icon'))
        .map(([iconName, icon]) => (
          <IconEntry key={iconName} iconName={iconName} Icon={icon} />
        ))}
    </div>
  );
};

export default IconsGrid;

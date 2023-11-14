import { useCallback } from 'react';
import { getIcons } from '../../../utils/icon_utils';
import IconEntry from './icon_entry/icon_entry';
import { CATEGORIES } from '../../../constants/categories';
import { QuillSvgProps } from '@deriv/quill-icons';

const IconsGrid = () => {
  const category = localStorage.getItem('category') ?? CATEGORIES.ALL;

  const memoizedGetIcons = useCallback(() => getIcons(category), [category]);
  const icons = memoizedGetIcons();

  return (
    <div className='grid grid-cols-3 gap-4 p-4 md:grid-cols-6'>
      {icons
        .filter(([iconName]) => iconName.endsWith('Icon'))
        .map(([iconName, icon]) => (
          <IconEntry
            key={iconName}
            iconName={iconName}
            Icon={icon as React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>}
          />
        ))}
    </div>
  );
};

export default IconsGrid;

import classNames from 'classnames';
import { useContext } from 'react';
import { IconContext } from '../../../../context/icon_context';
import { TIconEntry } from '../../../../types/icon_types';
import {
  ICON_GRID_DISPLAY_HEIGHT,
  ICON_GRID_DISPLAY_WIDTH,
} from '../../../../constants/icon_constants';

const IconEntry = ({ iconName, Icon }: TIconEntry) => {
  const iconContext = useContext(IconContext);
  const iconSelected = iconContext?.iconSelected;
  const setIconSelected = iconContext?.setIconSelected;

  const isIconSelected = iconSelected?.iconName === iconName;

  return (
    <div
      onKeyDown={undefined}
      onClick={() => setIconSelected?.({ Icon, iconName })}
      className={classNames(
        'flex h-40 flex-col justify-between overflow-hidden rounded-xl border-2 p-4 shadow-md',
        isIconSelected
          ? 'cursor-default border-rose-500 bg-rose-50'
          : 'cursor-pointer border-transparent hover:border-slate-400 hover:bg-slate-50',
      )}
    >
      <span />
      <span className='flex justify-center'>
        <Icon height={ICON_GRID_DISPLAY_HEIGHT} width={ICON_GRID_DISPLAY_WIDTH} />
      </span>
      <span className='mt-2 text-xs sm:text-sm'>{iconName}</span>
    </div>
  );
};

export default IconEntry;

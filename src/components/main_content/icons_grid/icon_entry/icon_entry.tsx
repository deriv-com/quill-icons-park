import classNames from 'classnames';
import { TIconEntry } from '../../../../types/icon_types';
import {
  ICON_GRID_DISPLAY_HEIGHT,
  ICON_GRID_DISPLAY_WIDTH,
} from '../../../../constants/icon_constants';
import { useIcon } from '@deriv/hooks';

const IconEntry = ({ category, iconName, Icon }: TIconEntry) => {
  const { setIcon, isIconSelected } = useIcon(iconName);

  return (
    <div
      onKeyDown={undefined}
      onClick={() => setIcon?.({ category, Icon, iconName })}
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

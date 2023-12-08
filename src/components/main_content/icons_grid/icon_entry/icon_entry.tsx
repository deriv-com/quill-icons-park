import classNames from 'classnames';
import { useIcon } from '@deriv/hooks';
import { ICON_GRID_DISPLAY_SIZE } from '@deriv/constants';
import { TIconEntry } from '@deriv/types';

export const IconEntry = ({ category, iconName, Icon }: TIconEntry) => {
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
        <Icon height={ICON_GRID_DISPLAY_SIZE.HEIGHT} width={ICON_GRID_DISPLAY_SIZE.WIDTH} />
      </span>
      <span className='mt-2 text-xs sm:text-sm'>{iconName}</span>
    </div>
  );
};

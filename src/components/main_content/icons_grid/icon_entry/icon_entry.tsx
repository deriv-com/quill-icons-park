import classNames from 'classnames';
import { useContext } from 'react';
import { IconContext, TIconEntry } from '../../../../context/icon_context';

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
        'flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border-2 p-4 shadow-md',
        isIconSelected
          ? 'border-rose-500 bg-rose-50'
          : 'border-transparent hover:border-slate-400 hover:bg-slate-50',
      )}
    >
      <span />
      <span className='flex justify-center'>
        <Icon />
      </span>
      <span className='mt-2 text-xs sm:text-sm'>{iconName}</span>
    </div>
  );
};

export default IconEntry;

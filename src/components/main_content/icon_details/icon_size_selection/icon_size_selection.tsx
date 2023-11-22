import { IconSize, sizes } from '@deriv/quill-icons';
import classNames from 'classnames';

type TIconSizeSelection = {
  iconSize: IconSize;
  setIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

const IconSizeSelection = ({ iconSize, setIconSize }: TIconSizeSelection) => (
  <div className='flex flex-col gap-2'>
    <span className='font-bold'>Icon Size</span>
    <div className='flex gap-4'>
      {Object.keys(sizes).map((size) => (
        <span
          key={size}
          onClick={() => setIconSize(size as IconSize)}
          className={classNames(
            'flex w-full cursor-pointer items-center justify-center rounded-md border-2 shadow-md',
            iconSize === size
              ? 'cursor-default border-rose-500'
              : 'border-slate-50 hover:border-slate-300',
          )}
        >
          {size}
        </span>
      ))}
    </div>
  </div>
);

export default IconSizeSelection;

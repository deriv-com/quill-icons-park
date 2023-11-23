import { IconSize, sizes } from '@deriv/quill-icons';
import classNames from 'classnames';

type TPredefinedIconSelection = {
  iconSize: IconSize;
  setIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

const PredefinedIconSizeSelection = ({ iconSize, setIconSize }: TPredefinedIconSelection) => (
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
);

export default PredefinedIconSizeSelection;

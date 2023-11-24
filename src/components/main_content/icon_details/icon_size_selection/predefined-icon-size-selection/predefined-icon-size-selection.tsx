import { IconSize, sizes } from '@deriv/quill-icons';
import classNames from 'classnames';

type TPredefinedIconSelection = {
  predefinedIconSize: IconSize;
  setPredefinedIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

const PredefinedIconSizeSelection = ({
  predefinedIconSize,
  setPredefinedIconSize,
}: TPredefinedIconSelection) => (
  <div className='flex justify-between'>
    {Object.keys(sizes).map((size) => (
      <span
        key={size}
        onClick={() => setPredefinedIconSize(size as IconSize)}
        className={classNames(
          'flex min-w-[4rem] cursor-pointer items-center justify-center rounded-md border-2 px-2 py-1 shadow-md',
          predefinedIconSize === size
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

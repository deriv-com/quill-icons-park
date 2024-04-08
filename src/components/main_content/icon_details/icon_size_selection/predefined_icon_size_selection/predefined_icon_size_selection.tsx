import { IconSize, IconSizeGuide } from '@deriv/quill-icons';
import classNames from 'classnames';

type TPredefinedIconSelection = {
  predefinedIconSize: IconSize;
  setPredefinedIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

export const PredefinedIconSizeSelection = ({
  predefinedIconSize,
  setPredefinedIconSize,
}: TPredefinedIconSelection) => {
  const handleSizeSelection = (size: IconSize) => setPredefinedIconSize(size);

  return (
    <div className='flex flex-wrap justify-between'>
      {IconSizeGuide.map(({ TShirtSize, size }) => (
        <span
          key={TShirtSize}
          onKeyDown={() => handleSizeSelection(TShirtSize as IconSize)}
          onClick={() => handleSizeSelection(TShirtSize as IconSize)}
          className={classNames(
            'mt-2 flex min-w-[4rem] items-center justify-center rounded-md border-2 px-2 py-1 shadow-md',
            predefinedIconSize === TShirtSize
              ? 'cursor-default border-rose-500 bg-rose-500 text-white'
              : 'cursor-pointer border-slate-50 hover:border-slate-300',
          )}
        >
          {`${TShirtSize} (${size})`}
        </span>
      ))}
    </div>
  );
};

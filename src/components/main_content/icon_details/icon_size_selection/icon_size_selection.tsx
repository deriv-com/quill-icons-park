import { CustomIconSizeSelection, PredefinedIconSizeSelection } from '@deriv/components';
import { useIcon } from '@deriv/hooks';
import { IconSize } from '@deriv/quill-icons';
import { TCustomIconSize } from '@deriv/types';

type TIconSizeSelection = {
  customIconSize: TCustomIconSize;
  setCustomIconSize: React.Dispatch<React.SetStateAction<TCustomIconSize>>;
  predefinedIconSize: IconSize;
  setPredefinedIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

export const IconSizeSelection = ({
  customIconSize,
  setCustomIconSize,
  predefinedIconSize,
  setPredefinedIconSize,
}: TIconSizeSelection) => {
  const { hasCustomIconSizeSupport, hasPredefinedIconSizeSupport } = useIcon();

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold text-slate-400'>Icon Size</span>
      {hasCustomIconSizeSupport && (
        <CustomIconSizeSelection
          customIconSize={customIconSize}
          setCustomIconSize={setCustomIconSize}
        />
      )}
      {hasPredefinedIconSizeSupport && (
        <PredefinedIconSizeSelection
          predefinedIconSize={predefinedIconSize}
          setPredefinedIconSize={setPredefinedIconSize}
        />
      )}
    </div>
  );
};

import { IconSize } from '@deriv/quill-icons';
import { PredefinedIconSizeSelection } from './predefined_icon_size_selection/predefined_icon_size_selection';
import { CustomIconSizeSelection } from './custom_icon_size_selection/custom_icon_size_selection';
import { useIcon } from '@deriv/hooks';
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

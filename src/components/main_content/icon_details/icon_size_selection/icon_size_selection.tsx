import { IconSize } from '@deriv/quill-icons';
import PredefinedIconSizeSelection from './predefined-icon-size-selection/predefined-icon-size-selection';
import CustomIconSizeSelection from './custom-icon-size-selection/custom-icon-size-selection';
import { TCustomIconSize } from '../../../../types/icon_types';
import useIcon from '../../../../hooks/icon/useIcon';

type TIconSizeSelection = {
  customIconSize: TCustomIconSize;
  setCustomIconSize: React.Dispatch<React.SetStateAction<TCustomIconSize>>;
  predefinedIconSize: IconSize;
  setPredefinedIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

const IconSizeSelection = ({
  customIconSize,
  setCustomIconSize,
  predefinedIconSize,
  setPredefinedIconSize,
}: TIconSizeSelection) => {
  const { hasCustomIconSizeSupport, hasPredefinedIconSizeSupport } = useIcon();

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold text-slate-400'>Icon Size</span>
      <div className='flex flex-col gap-4'>
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
    </div>
  );
};

export default IconSizeSelection;

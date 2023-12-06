import { IconSize } from '@deriv/quill-icons';
import PredefinedIconSizeSelection from './predefined-icon-size-selection/predefined-icon-size-selection';
import CustomIconSizeSelection from './custom-icon-size-selection/custom-icon-size-selection';
import { useContext } from 'react';
import { CategoryContext } from '../../../../context_provider/category_context';
import {
  CUSTOM_ICON_SIZE_SELECTION_CATEGORIES,
  PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES,
} from '../../../../constants/category_constants';
import { TCustomIconSize } from '../../../../types/icon_types';

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
  const categoryContext = useContext(CategoryContext);
  const categorySelected = categoryContext?.categorySelected;

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold text-slate-400'>Icon Size</span>
      <div className='flex flex-col gap-4'>
        {CUSTOM_ICON_SIZE_SELECTION_CATEGORIES.includes(categorySelected as string) && (
          <CustomIconSizeSelection
            customIconSize={customIconSize}
            setCustomIconSize={setCustomIconSize}
          />
        )}
        {PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES.includes(categorySelected as string) && (
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

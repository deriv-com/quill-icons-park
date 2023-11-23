import { IconSize } from '@deriv/quill-icons';
import PredefinedIconSizeSelection from './predefined-icon-size-selection/predefined-icon-size-selection';
import CustomIconSizeSelection from './custom-icon-size-selection/custom-icon-size-selection';
import { useContext } from 'react';
import { CategoryContext } from '../../../../context/category_context';
import {
  CUSTOM_ICON_SIZE_SELECTION_CATEGORIES,
  PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES,
} from '../../../../constants/category_constants';

type TIconSizeSelection = {
  iconSize: IconSize;
  setIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

const IconSizeSelection = ({ iconSize, setIconSize }: TIconSizeSelection) => {
  const categoryContext = useContext(CategoryContext);
  const categorySelected = categoryContext?.categorySelected;

  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold'>Icon Size</span>
      {CUSTOM_ICON_SIZE_SELECTION_CATEGORIES.includes(categorySelected as string) && (
        <CustomIconSizeSelection iconSize={iconSize} setIconSize={setIconSize} />
      )}
      {PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES.includes(categorySelected as string) && (
        <PredefinedIconSizeSelection iconSize={iconSize} setIconSize={setIconSize} />
      )}
    </div>
  );
};

export default IconSizeSelection;

import { IconSize } from '@deriv/quill-icons';
import PredefinedIconSizeSelection from './predefined-icon-size-selection/predefined-icon-size-selection';

type TIconSizeSelection = {
  iconSize: IconSize;
  setIconSize: React.Dispatch<React.SetStateAction<IconSize>>;
};

const IconSizeSelection = ({ iconSize, setIconSize }: TIconSizeSelection) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold'>Icon Size</span>
      <PredefinedIconSizeSelection iconSize={iconSize} setIconSize={setIconSize} />
    </div>
  );
};

export default IconSizeSelection;

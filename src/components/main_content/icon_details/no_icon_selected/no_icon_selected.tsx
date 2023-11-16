import classNames from 'classnames';
import { StandaloneComputerMouseScrollwheelBoldIcon } from '@deriv/quill-icons/Standalone';

type TNoIconSelected = {
  isIconSelected: boolean;
};

const NoIconSelected = ({ isIconSelected }: TNoIconSelected) => (
  <div
    className={classNames(
      'sticky top-60 transition-opacity',
      isIconSelected ? 'opacity-0' : 'opacity-100',
    )}
  >
    <div className='flex flex-col items-center opacity-50'>
      <StandaloneComputerMouseScrollwheelBoldIcon />
      <span>Select an icon to see it's details!</span>
    </div>
  </div>
);

export default NoIconSelected;

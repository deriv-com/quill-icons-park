import classNames from 'classnames';
import { StandaloneComputerMouseScrollwheelBoldIcon } from '@deriv/quill-icons/Standalone';

type TNoIconSelected = {
  isVisible: boolean;
};

const NoIconSelected = ({ isVisible }: TNoIconSelected) => (
  <div
    className={classNames(
      'sticky top-60 transition-opacity',
      isVisible ? 'opacity-100' : 'opacity-0',
    )}
  >
    <div className='flex flex-col items-center opacity-50'>
      <StandaloneComputerMouseScrollwheelBoldIcon />
      <span>Select an icon to see it's details!</span>
    </div>
  </div>
);

export default NoIconSelected;

import classNames from 'classnames';
import { StandaloneComputerMouseScrollwheelBoldIcon } from '@deriv/quill-icons/Standalone';

type TNoIconSelected = {
  isVisible: boolean;
};

const NoIconSelected = ({ isVisible }: TNoIconSelected) => (
  <span
    className={classNames(
      'absolute left-0 right-0 h-full w-96',
      isVisible ? 'opacity-100' : 'opacity-0',
    )}
  >
    <div className='sticky top-48 transition-opacity'>
      <div className='flex flex-col items-center opacity-50'>
        <StandaloneComputerMouseScrollwheelBoldIcon />
        <span>Select an icon to see it's details!</span>
      </div>
    </div>
  </span>
);

export default NoIconSelected;

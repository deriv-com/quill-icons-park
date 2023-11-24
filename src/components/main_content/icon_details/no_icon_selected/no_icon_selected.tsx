import classNames from 'classnames';
import { StandaloneComputerMouseScrollwheelBoldIcon } from '@deriv/quill-icons/Standalone';

type TNoIconSelected = {
  isVisible: boolean;
};

const NoIconSelected = ({ isVisible }: TNoIconSelected) => (
  <span
    className={classNames('absolute top-16 h-full w-full', isVisible ? 'opacity-100' : 'opacity-0')}
  >
    <div className='sticky transition-opacity'>
      <div className='flex flex-col items-center opacity-50'>
        <StandaloneComputerMouseScrollwheelBoldIcon />
        <span>Select an icon to see it's details!</span>
      </div>
    </div>
  </span>
);

export default NoIconSelected;

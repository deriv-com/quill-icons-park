import { useContext, useEffect } from 'react';
import { IconContext } from '../../../context/icon_context';
import { CategoryContext } from '../../../context/category_context';
import classNames from 'classnames';

const IconDetails = () => {
  const iconContext = useContext(IconContext);
  const categoryContext = useContext(CategoryContext);

  const iconSelected = iconContext?.iconSelected;
  const setIconSelected = iconContext?.setIconSelected;
  const Icon = iconSelected?.Icon;

  const categorySelected = categoryContext?.categorySelected;

  useEffect(() => setIconSelected?.(undefined), [categorySelected, setIconSelected]);

  return (
    <div className='p-4'>
      <div
        className={classNames(
          'sticky top-36 flex flex-col gap-4 rounded-xl p-4 shadow-xl transition-transform delay-100',
          Icon ? 'translate-x-0' : 'translate-x-96',
        )}
      >
        <span>Icon Details</span>
        <div className='flex items-center justify-center'>{Icon && <Icon />}</div>
      </div>
    </div>
  );
};

export default IconDetails;

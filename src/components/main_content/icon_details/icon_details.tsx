import { useContext, useEffect } from 'react';
import { IconContext } from '../../../context/icon_context';
import { CategoryContext } from '../../../context/category_context';
import classNames from 'classnames';
import NoIconSelected from './no_icon_selected/no_icon_selected';

const IconDetails = () => {
  const iconContext = useContext(IconContext);
  const categoryContext = useContext(CategoryContext);

  const iconSelected = iconContext?.iconSelected;
  const setIconSelected = iconContext?.setIconSelected;
  const Icon = iconSelected?.Icon;

  const categorySelected = categoryContext?.categorySelected;

  useEffect(() => setIconSelected?.(undefined), [categorySelected, setIconSelected]);

  return (
    <div className='relative p-4'>
      <div
        className={classNames(
          'sticky top-36 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-xl transition-all delay-100',
          Icon ? 'opacity-1 translate-x-0' : 'translate-x-96 opacity-0',
        )}
      >
        <span>Icon Details</span>
        <div className='flex items-center justify-center'>{Icon && <Icon />}</div>
      </div>
      <NoIconSelected isIconSelected={!!Icon} />
    </div>
  );
};

export default IconDetails;

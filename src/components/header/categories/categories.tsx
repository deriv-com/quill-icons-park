import { useContext } from 'react';
import { CATEGORIES } from '../../../constants/categories';
import './categories.scss';
import classNames from 'classnames';
import { CategoryContext } from '../../../context/category_context';

const Categories = () => {
  const categoryContext = useContext(CategoryContext);
  const categorySelected = categoryContext?.categorySelected;
  const setCategorySelected = categoryContext?.setCategorySelected;

  return (
    <div className='categories mt-2 flex w-full items-center justify-start gap-2 overflow-scroll px-4 sm:mt-6 md:justify-center'>
      {Object.entries(CATEGORIES).map(([key, category]) => (
        <div
          key={key}
          className={classNames(
            categorySelected === category
              ? 'border-rose-500 bg-rose-500 text-white'
              : 'border-slate-500',
            'flex min-w-max cursor-pointer rounded-lg border px-2 py-1 transition-colors',
          )}
          onClick={() => setCategorySelected?.(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;

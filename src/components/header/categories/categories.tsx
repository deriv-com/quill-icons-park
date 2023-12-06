import { useContext } from 'react';
import { CATEGORIES } from '../../../constants/category_constants';
import './categories.scss';
import classNames from 'classnames';
import { CategoryContext } from '../../../context_provider/category_context';

const Categories = () => {
  const categoryContext = useContext(CategoryContext);
  const category = categoryContext?.category;
  const setCategory = categoryContext?.setCategory;

  return (
    <div className='categories mt-2 flex w-full items-center justify-start gap-2 overflow-scroll px-4 sm:mt-6 md:justify-center'>
      {Object.entries(CATEGORIES).map(([categoryKey, categoryValue]) => (
        <div
          key={categoryKey}
          className={classNames(
            category === categoryValue
              ? 'border-rose-500 bg-rose-500 text-white'
              : 'border-slate-500',
            'flex min-w-max cursor-pointer rounded-lg border px-2 py-1 transition-colors',
          )}
          onClick={() => setCategory?.(categoryValue)}
        >
          {categoryValue}
        </div>
      ))}
    </div>
  );
};

export default Categories;

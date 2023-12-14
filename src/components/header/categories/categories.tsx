import { CATEGORIES } from '@deriv/constants';
import { useCategory, useIcon } from '@deriv/hooks';
import classNames from 'classnames';
import './categories.scss';

export const Categories = () => {
  const { category, setCategory } = useCategory();
  const { clearIcon } = useIcon();

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
          onClick={() => {
            clearIcon();
            setCategory?.(categoryValue);
          }}
        >
          {categoryValue}
        </div>
      ))}
    </div>
  );
};

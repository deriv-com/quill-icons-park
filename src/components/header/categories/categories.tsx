import { CATEGORIES } from '@deriv/constants';
import { useCategory, useIcon } from '@deriv/hooks';
import classNames from 'classnames';
import './categories.scss';

export const Categories = () => {
  const { category, setCategory } = useCategory();
  const { clearIcon } = useIcon();

  return (
    <div className='mt-2 w-full min-w-0 sm:mt-6'>
      <div className='categories flex flex-nowrap items-center gap-2 px-4'>
        {Object.entries(CATEGORIES).map(([categoryKey, categoryValue]) => (
          <div
            key={categoryKey}
            className={classNames(
              category === categoryValue
                ? 'border-rose-500 bg-rose-500 text-white'
                : 'border-slate-500',
              'flex shrink-0 cursor-pointer rounded-lg border px-2 py-1 transition-colors',
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
    </div>
  );
};

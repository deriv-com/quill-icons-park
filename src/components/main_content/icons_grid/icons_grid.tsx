import { useContext } from 'react';
import { Loading } from '../../shared/loading/loading';
import { IconCategory } from './icon_category/icon_category';
import { useQuillIcons } from '@deriv/hooks';
import { CATEGORIES, DEFAULT_CATEGORY } from '@deriv/constants';
import { CategoryContext } from '@deriv/stores';
import { NoIconsFound } from './no_icons_found/no_icons_found';

export const IconsGrid = () => {
  const categoryContext = useContext(CategoryContext);
  const categorySelected = categoryContext?.category ?? DEFAULT_CATEGORY;
  const { data: quillIcons, isEmptyResult, isLoading } = useQuillIcons(categorySelected);

  if (isLoading) return <Loading />;
  if (isEmptyResult) return <NoIconsFound categorySelected={categorySelected} />;

  return (
    <div className='flex flex-col gap-4'>
      {quillIcons.map(({ category, quillIconsModule }) => (
        <IconCategory
          key={category.toString()}
          category={category}
          quillIconsModule={quillIconsModule}
          shouldDisplayCategory={categorySelected === CATEGORIES.ALL}
        />
      ))}
    </div>
  );
};

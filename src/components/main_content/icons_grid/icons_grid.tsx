import { useContext } from 'react';
import { CATEGORIES, DEFAULT_CATEGORY } from '../../../constants/category_constants';
import { CategoryContext } from '../../../context_provider/category_context';
import { SearchContext } from '../../../context_provider/search_context';
import NoIconsFound from './no_icons_found/no_icons_found';
import useQuillIcons from '../../../hooks/quill_icons_hook/useQuillIcons';
import Loading from '../../shared/loading/loading';
import IconCategory from './icon_category/icon_category';

const IconsGrid = () => {
  const searchContext = useContext(SearchContext);
  const categoryContext = useContext(CategoryContext);

  const searchText = searchContext?.searchText ?? '';
  const categorySelected = categoryContext?.categorySelected ?? DEFAULT_CATEGORY;

  const {
    data: quillIcons,
    isEmptyResult,
    isLoading,
  } = useQuillIcons(searchText, categorySelected);

  if (isLoading) return <Loading />;
  if (isEmptyResult)
    return <NoIconsFound searchText={searchText} categorySelected={categorySelected} />;

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

export default IconsGrid;

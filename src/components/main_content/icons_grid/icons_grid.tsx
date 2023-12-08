import { Loading } from '../../shared/loading/loading';
import { IconCategory } from './icon_category/icon_category';
import { useQuillIcons } from '@deriv/hooks';
import { NoIconsFound } from './no_icons_found/no_icons_found';

export const IconsGrid = () => {
  const { data: quillIcons, isEmptyResult, isLoading } = useQuillIcons();

  if (isLoading) return <Loading />;
  if (isEmptyResult) return <NoIconsFound />;

  return (
    <div className='flex flex-col gap-4'>
      {quillIcons.map(({ category, quillIconsModule }) => (
        <IconCategory
          key={category.toString()}
          category={category}
          quillIconsModule={quillIconsModule}
        />
      ))}
    </div>
  );
};

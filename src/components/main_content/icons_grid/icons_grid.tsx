import { IconCategory, Loading, NoIconsFound } from '@deriv/components';
import { useQuillIcons } from '@deriv/hooks';

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

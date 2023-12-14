import { IconEntry } from '@deriv/components';
import { useCategory } from '@deriv/hooks';
import { QuillSvgProps } from '@deriv/quill-icons';
import { TIconEntryCategory, TQuillIconsModuleEntry } from '@deriv/types';

type TIconCategory = {
  category: TIconEntryCategory;
  quillIconsModule: TQuillIconsModuleEntry[];
};

export const IconCategory = ({ category, quillIconsModule }: TIconCategory) => {
  const { hasCategoryAllSelected } = useCategory();

  return (
    !!quillIconsModule.length && (
      <div className='flex flex-col gap-2'>
        {hasCategoryAllSelected && (
          <div className='mt-2 flex justify-center'>
            <span className='rounded-lg border px-2 py-1 font-bold'>{category}</span>
          </div>
        )}
        <div className='grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 xl:grid-cols-6'>
          {quillIconsModule.map(({ category, icon, iconName }) => (
            <IconEntry
              key={iconName}
              category={category}
              iconName={iconName}
              Icon={icon as React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>}
            />
          ))}
        </div>
      </div>
    )
  );
};

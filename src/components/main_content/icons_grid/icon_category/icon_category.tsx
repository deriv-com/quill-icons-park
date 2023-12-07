import { QuillSvgProps } from '@deriv/quill-icons';
import { TQuillIconsModuleEntry } from '../../../../types/icon_modules';
import IconEntry from '../icon_entry/icon_entry';
import { TIconEntryCategory } from '../../../../types/icon_types';

type TIconCategory = {
  category: TIconEntryCategory;
  quillIconsModule: TQuillIconsModuleEntry[];
  shouldDisplayCategory?: boolean;
};

const IconCategory = ({ category, quillIconsModule, shouldDisplayCategory }: TIconCategory) => {
  return (
    !!quillIconsModule.length && (
      <div className='flex flex-col gap-2'>
        {shouldDisplayCategory && (
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

export default IconCategory;

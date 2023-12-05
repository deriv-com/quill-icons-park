import { QuillSvgProps } from '@deriv/quill-icons';
import { TQuillIconsModuleEntry } from '../../../../types/icon_modules';
import IconEntry from '../icon_entry/icon_entry';

type TIconCategory = {
  category: string;
  quillIconsModule: TQuillIconsModuleEntry[];
  shouldDisplayCategory?: boolean;
};

const IconCategory = ({
  category,
  quillIconsModule,
  shouldDisplayCategory = true,
}: TIconCategory) => {
  return (
    quillIconsModule.length > 0 && (
      <div className='flex flex-col gap-2'>
        {shouldDisplayCategory && <span className='ml-4 mt-2 font-bold'>{category}</span>}
        <div className='grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 xl:grid-cols-6'>
          {quillIconsModule.map(({ icon, iconName }) => (
            <IconEntry
              key={iconName}
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

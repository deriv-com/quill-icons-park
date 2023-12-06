import { QuillSvgProps } from '@deriv/quill-icons';
import { TIconEntryCategory } from './icon_types';

export type TQuillIconsModuleEntry = {
  category: TIconEntryCategory;
  icon: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>;
  iconName: string;
};

export type TQuillIconsModules = {
  category: TIconEntryCategory;
  quillIconsModule: TQuillIconsModuleEntry[];
};

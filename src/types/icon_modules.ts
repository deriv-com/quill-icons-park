import { TIconEntryCategory, TQuillIconComponent } from '@deriv/types';

export type TQuillIconsModuleEntry = {
  category: TIconEntryCategory;
  icon: TQuillIconComponent;
  iconName: string;
};

export type TQuillIconsModules = {
  category: TIconEntryCategory;
  quillIconsModule: TQuillIconsModuleEntry[];
};

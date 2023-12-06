import { TIconEntryCategory } from './icon_types';

export type TQuillIconsModuleEntry = {
  category: TIconEntryCategory;
  icon: unknown;
  iconName: string;
};

export type TQuillIconsModules = {
  category: TIconEntryCategory;
  quillIconsModule: TQuillIconsModuleEntry[];
};

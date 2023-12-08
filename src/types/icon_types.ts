import { CATEGORIES } from '@deriv/constants';
import { QuillSvgProps } from '@deriv/quill-icons';

export type TIconEntryCategory = Omit<(typeof CATEGORIES)[keyof typeof CATEGORIES], 'All'>;

export type TIconEntry = {
  category: TIconEntryCategory;
  iconName: string;
  Icon: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>;
};

export type TCustomIconSize = {
  height: string;
  width: string;
};

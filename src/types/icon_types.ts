import { CATEGORIES } from '@deriv/constants';
import { QuillIllustrationComponent, QuillSvgProps } from '@deriv/quill-icons';

export type TIconEntryCategory = Omit<(typeof CATEGORIES)[keyof typeof CATEGORIES], 'All'>;

export type TQuillSvgIcon = React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>;
export type TQuillIconComponent = TQuillSvgIcon | QuillIllustrationComponent;

export type TIconEntry = {
  category: TIconEntryCategory;
  iconName: string;
  Icon: TQuillIconComponent;
};

export type TCustomIconSize = {
  height: string;
  width: string;
};

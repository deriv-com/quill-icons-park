import { QuillSvgProps } from '@deriv/quill-icons';

export type TIconEntry = {
  iconName: string;
  Icon: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>;
};

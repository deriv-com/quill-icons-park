import { QuillSvgProps } from '@deriv/quill-icons';
import { Dispatch, SetStateAction, createContext } from 'react';

export type TIconEntry = {
  iconName: string;
  Icon: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>;
};
export type TIconContext = {
  iconSelected?: TIconEntry;
  setIconSelected?: Dispatch<SetStateAction<TIconEntry | undefined>>;
} | null;

export const IconContext = createContext<TIconContext>({});

import { PropsWithChildren, useMemo } from 'react';
import { IconContext } from './icon_context';
import { TIconEntry } from '@deriv/types';

type TIconProvider = {
  icon?: TIconEntry;
  setIcon: React.Dispatch<React.SetStateAction<TIconEntry | undefined>>;
};

export const IconProvider = ({ children, icon, setIcon }: PropsWithChildren<TIconProvider>) => (
  <IconContext.Provider value={useMemo(() => ({ icon, setIcon }), [icon, setIcon])}>
    {children}
  </IconContext.Provider>
);

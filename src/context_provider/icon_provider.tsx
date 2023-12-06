import { PropsWithChildren, useMemo } from 'react';
import { TIconEntry } from '../types/icon_types';
import { IconContext } from './icon_context';

type TIconProvider = {
  icon?: TIconEntry;
  setIcon: React.Dispatch<React.SetStateAction<TIconEntry | undefined>>;
};

const IconProvider = ({ children, icon, setIcon }: PropsWithChildren<TIconProvider>) => (
  <IconContext.Provider value={useMemo(() => ({ icon, setIcon }), [icon, setIcon])}>
    {children}
  </IconContext.Provider>
);

export default IconProvider;

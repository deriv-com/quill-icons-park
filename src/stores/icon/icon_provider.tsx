import { IconContext } from '@deriv/stores';
import { TIconEntry } from '@deriv/types';
import { PropsWithChildren, useMemo, useState } from 'react';

export const IconProvider = ({ children }: PropsWithChildren) => {
  const [icon, setIcon] = useState<TIconEntry>();

  return (
    <IconContext.Provider value={useMemo(() => ({ icon, setIcon }), [icon, setIcon])}>
      {children}
    </IconContext.Provider>
  );
};

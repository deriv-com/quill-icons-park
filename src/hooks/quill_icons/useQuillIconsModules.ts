import { getQuillIconsModules } from '@deriv/utils';
import { useQuery } from '@tanstack/react-query';

export const useQuillIconsModules = (searchText: string) =>
  useQuery({
    queryKey: ['getQuillIconsModules', searchText],
    queryFn: () => getQuillIconsModules(searchText),
  });

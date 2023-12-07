import { useQuery } from '@tanstack/react-query';
import { getQuillIconsModules } from '../../utils/icon_utils';

export const useQuillIconsModules = (searchText: string) =>
  useQuery({
    queryKey: ['getQuillIconsModules', searchText],
    queryFn: () => getQuillIconsModules(searchText),
  });

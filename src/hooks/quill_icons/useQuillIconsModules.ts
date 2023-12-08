import { getQuillIconsModules } from '@deriv/utils';
import { useQuery } from '@tanstack/react-query';
import { useSearch } from '@deriv/hooks';

export const useQuillIconsModules = () => {
  const { search } = useSearch();

  return useQuery({
    queryKey: ['getQuillIconsModules', search],
    queryFn: () => getQuillIconsModules(search),
  });
};

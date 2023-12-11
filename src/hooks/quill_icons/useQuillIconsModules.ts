import { useSearch } from '@deriv/hooks';
import { getQuillIconsModules } from '@deriv/utils';
import { useQuery } from '@tanstack/react-query';

export const useQuillIconsModules = () => {
  const { search } = useSearch();

  return useQuery({
    queryKey: ['getQuillIconsModules', search],
    queryFn: () => getQuillIconsModules(search),
  });
};

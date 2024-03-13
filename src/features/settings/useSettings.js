import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
    staleTime: 0,
  });

  return { isLoading, error, settings };
}

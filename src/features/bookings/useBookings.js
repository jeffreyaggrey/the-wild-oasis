import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getBookings } from '../../services/apiBookings';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, operator: 'eq' };

  // SORT
  const sort = searchParams.get('sort') || 'startDate-desc';
  const [field, direction] = sort.split('-');
  const sortBy = { field, direction };

  const { isLoading, data: bookings } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings };
}

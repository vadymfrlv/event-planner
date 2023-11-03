import { useQuery } from '@tanstack/react-query';

import { fetchEventsWithPagination } from 'services/eventsApi';

export const useEventsWithPaginationQuery = (currentPage: number, limitPerPage: number) => {
  const queryInfo = useQuery({
    queryFn: () => fetchEventsWithPagination(currentPage, limitPerPage),
    queryKey: ['events', currentPage, limitPerPage],
    staleTime: 2000 * 5,
    keepPreviousData: true,
    onError: error => {
      if (error instanceof Error) {
        console.error(error);
      }
    },
  });

  const events = queryInfo.data?.events;
  const totalEvents = queryInfo.data?.total;

  return {
    ...queryInfo,
    data: events,
    total: totalEvents,
  };
};

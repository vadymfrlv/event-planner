import { useQuery } from '@tanstack/react-query';

import { fetchEvents } from 'services/eventsApi';

export const useEventsQuery = () => {
  return useQuery({
    queryFn: () => fetchEvents(),
    queryKey: ['events'],
    staleTime: 2000 * 5,
    onError: error => {
      if (error instanceof Error) {
        console.error(error);
      }
    },
  });
};

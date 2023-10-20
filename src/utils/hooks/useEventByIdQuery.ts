import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchEventById } from 'services/eventsApi';

export const useEventByIdQuery = () => {
  const { eventId } = useParams();

  return useQuery({
    queryFn: () => {
      if (eventId) {
        return fetchEventById(eventId);
      }
    },
    queryKey: ['event', eventId],
    staleTime: 1000 * 5,
    onError: error => {
      if (error instanceof Error) {
        console.error(error);
      }
    },
  });
};

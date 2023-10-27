import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteEventById } from 'services/eventsApi';
import { Event } from 'types/event';

export const useDeleteEventByIdMutation = () => {
  const queryClient = useQueryClient();

  //use optimistic update
  return useMutation({
    mutationFn: (eventId: string) => deleteEventById(eventId),

    onMutate: async (eventId: string) => {
      // save old data
      const oldData = queryClient.getQueryData<Event[]>(['events']);

      // refresh cache
      queryClient.setQueryData<Event[]>(['events'], data => {
        return (data || []).filter(event => event.id !== eventId);
      });

      // return old data to restore at onError
      return { oldData };
    },

    onError: (error, _, context) => {
      console.error('An error occurred:', error);
      if (context?.oldData) {
        queryClient.setQueryData(['events'], context.oldData);
      }
    },

    // refresh cache after successful delete
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
    },
  });
};

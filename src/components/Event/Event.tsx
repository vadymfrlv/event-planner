import { useEventByIdQuery } from 'utils/hooks/useEventByIdQuery';

import { EventWrapper } from './Event.styled';

export const Event = () => {
  const { data: event, isSuccess } = useEventByIdQuery();
  return <EventWrapper>{isSuccess && event.title}</EventWrapper>;
};

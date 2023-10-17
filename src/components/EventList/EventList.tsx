import { useEventsQuery } from 'utils/hooks/useEventsQuery';

import { EventListItem } from 'components/EventListItem/EventListItem';

import { EventListStyled } from './EventList.styled';

export const EventList = () => {
  const { data: events, isSuccess } = useEventsQuery();

  return (
    <>
      {isSuccess && (
        <EventListStyled>
          {events.map(event => (
            <EventListItem key={event.id} {...event} />
          ))}
        </EventListStyled>
      )}
    </>
  );
};

import { useEventsQuery } from 'hooks/useEventsQuery';

import { EventListItem } from 'components/EventListItem/EventListItem';

import { EventListStyled } from './EventList.styled';
import { BaseBox } from 'components/Box/Box';

export const EventList = () => {
  const { data: events, isSuccess } = useEventsQuery();

  return (
    <BaseBox display="flex" alignItems="center" justifyContent="space-around">
      {isSuccess ? (
        <EventListStyled>
          {events.map(event => (
            <EventListItem key={event.id} {...event} />
          ))}
        </EventListStyled>
      ) : (
        <h1>LOADING</h1>
      )}
    </BaseBox>
  );
};

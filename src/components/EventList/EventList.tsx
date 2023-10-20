import { useEventsQuery } from 'utils/hooks/useEventsQuery';

import { Loader } from 'components/Loader/Loader';
import { EventListItem } from 'components/EventListItem/EventListItem';
import { ErrorNotification } from 'components/ErrorNotification/ErrorNotification';

import { EventListStyled } from './EventList.styled';

export const EventList = () => {
  const { data: events, isFetching, isSuccess, isError } = useEventsQuery();

  return (
    <>
      {isFetching && <Loader />}
      {isSuccess && (
        <EventListStyled>
          {events.map(event => (
            <EventListItem key={event.id} {...event} />
          ))}
        </EventListStyled>
      )}
      {isError && <ErrorNotification />}
    </>
  );
};

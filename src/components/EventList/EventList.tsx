import { Loader } from 'components/Loader/Loader';
import { EventListItem } from 'components/EventListItem/EventListItem';
import { ErrorNotification } from 'components/ErrorNotification/ErrorNotification';

import { EventListStyled } from './EventList.styled';
import { Event } from 'types/event';

interface useEventsQueryProps {
  data: Event[] | undefined;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const EventList = (props: useEventsQueryProps) => {
  const { data: events, isFetching, isSuccess, isError } = props;
  return (
    <>
      {isFetching && <Loader />}
      {isSuccess && (
        <EventListStyled>
          {events?.map(event => (
            <EventListItem key={event.id} {...event} />
          ))}
        </EventListStyled>
      )}
      {isError && <ErrorNotification />}
    </>
  );
};

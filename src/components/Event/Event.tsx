import { useEventByIdQuery } from 'utils/hooks/useEventByIdQuery';

import { Loader } from 'components/Loader/Loader';
import { ErrorNotification } from 'components/ErrorNotification/ErrorNotification';

import defaultPicWide from 'assets/images/defaults/default-wide.png';

import { EventWrapper, Title, EventPicture, EventInfoThumb, EventDescr } from './Event.styled';

export const Event = () => {
  const { data: event, isFetching, isSuccess, isError } = useEventByIdQuery();

  if (!event) {
    return;
  }

  const { id, title, description, time, date, location, category, picture, priority } = event;

  return (
    <>
      {isFetching && <Loader />}
      {isSuccess && (
        <EventWrapper>
          <Title>{title}</Title>
          <EventInfoThumb>
            <EventPicture src={picture ? picture : defaultPicWide} alt={category.label} />
            <EventDescr>{description}</EventDescr>
          </EventInfoThumb>
        </EventWrapper>
      )}
      {isError && <ErrorNotification />}
    </>
  );
};

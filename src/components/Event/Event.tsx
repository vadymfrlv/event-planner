import { useEventByIdQuery } from 'utils/hooks/useEventByIdQuery';

import { Loader } from 'components/Loader/Loader';
import { convertTime } from 'utils/helpers/convertTime';
import { convertDate } from 'utils/helpers/convertDate';
import { ActionBtn } from 'components/ActionBtn/ActionBtn';
import { ErrorNotification } from 'components/ErrorNotification/ErrorNotification';

import defaultPicWide from 'assets/images/defaults/default-wide.png';

import {
  EventWrapper,
  Title,
  EventPicture,
  EventInfoThumb,
  EventDescr,
  EventCategory,
  EventPriority,
  EventDateAndTime,
  EventLocation,
} from './Event.styled';

export const Event = () => {
  const { data: event, isFetching, isSuccess, isError } = useEventByIdQuery();

  if (!event) {
    return;
  }

  const { id, title, description, time, date, location, category, picture, priority } = event;

  const convertedTime = convertTime(time);
  const convertedDate = convertDate(date);

  return (
    <>
      {isFetching && <Loader />}
      {isSuccess && (
        <EventWrapper>
          <Title>{title}</Title>
          <EventPicture src={picture ? picture : defaultPicWide} alt={category.label} />
          <EventInfoThumb>
            <EventDescr>{description}</EventDescr>
            <EventCategory>{category.label}</EventCategory>
            <EventPriority $priorityLevel={priority.value}>{priority.label}</EventPriority>
            <EventLocation>{location}</EventLocation>
            <EventDateAndTime>
              {convertedDate} at {convertedTime}
            </EventDateAndTime>
            <ActionBtn type="button" description="Delete event" onClick={() => deleteEvent(id)} />
          </EventInfoThumb>
        </EventWrapper>
      )}
      {isError && <ErrorNotification />}
    </>
  );
};

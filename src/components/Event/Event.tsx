import { useLocation } from 'react-router-dom';

import { useEventByIdQuery } from 'utils/hooks/useEventByIdQuery';

import { Loader } from 'components/Loader/Loader';
import { convertTime } from 'utils/helpers/convertTime';
import { convertDate } from 'utils/helpers/convertDate';
import { ErrorNotification } from 'components/ErrorNotification/ErrorNotification';

import defaultPicWide from 'assets/images/defaults/default-wide.png';

import {
  EventWrapper,
  Title,
  EventThumb,
  EventPicture,
  EventInfoThumb,
  EventDescr,
  EventDetailsThumb,
  EventCategory,
  EventPriority,
  EventLocation,
  EventDateAndTime,
  EventBtnsThumb,
  EventEditBtn,
  EventDeleteBtn,
} from './Event.styled';

export const Event = () => {
  const { data: event, isFetching, isSuccess, isError } = useEventByIdQuery();

  const linkLocation = useLocation();

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
          <EventThumb>
            <EventPicture src={picture ? picture : defaultPicWide} alt={category.label} />
            <EventInfoThumb>
              <EventDescr>{description}</EventDescr>
              <EventDetailsThumb>
                <EventCategory>{category.label}</EventCategory>
                <EventPriority $priorityLevel={priority.value}>{priority.label}</EventPriority>
                <EventLocation>{location}</EventLocation>
                <EventDateAndTime>
                  {convertedDate} at {convertedTime}
                </EventDateAndTime>
              </EventDetailsThumb>

              <EventBtnsThumb>
                <EventEditBtn to={`/event-edit/${id}`} state={{ from: linkLocation }}>
                  Edit
                </EventEditBtn>
                <EventDeleteBtn>Delete event</EventDeleteBtn>
              </EventBtnsThumb>
            </EventInfoThumb>
          </EventThumb>
        </EventWrapper>
      )}
      {isError && <ErrorNotification />}
    </>
  );
};

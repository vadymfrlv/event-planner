import { useLocation } from 'react-router-dom';

import { Event } from 'types/event';
import { convertTime } from 'utils/helpers/convertTime';
import { convertDate } from 'utils/helpers/convertDate';
import { ellipsisText } from 'utils/helpers/ellipsisText';

import defaultPicSquare from 'assets/images/defaults/default-square.png';

import {
  EventListItemStyled,
  CategoryPriorityWrapper,
  EventCategory,
  EventPriority,
  EventPicture,
  EventInfoThumb,
  DateTimeLocationWrapper,
  EventDateAndTime,
  EventLocation,
  EventTitleDescrWrapper,
  EventTitle,
  EventDescr,
  MoreInfoLink,
} from './EventListItem.styled';

export const EventListItem = (props: Event) => {
  const { id, title, description, time, date, location, category, picture, priority } = props;

  const linkLocation = useLocation();
  const convertedTime = convertTime(time);
  const convertedDate = convertDate(date);
  const displayText = ellipsisText(description, 100);

  const checkEventStatus = (date: string) => {
    return Date.parse(date) <= Date.now();
  };

  return (
    <EventListItemStyled>
      <CategoryPriorityWrapper>
        <EventCategory>{category.label}</EventCategory>
        <EventPriority $priorityLevel={priority.value}>{priority.label}</EventPriority>
      </CategoryPriorityWrapper>
      <EventPicture src={picture ? picture : defaultPicSquare} alt={category.label} />

      <EventInfoThumb className="hover-effect">
        <DateTimeLocationWrapper>
          <EventDateAndTime>
            {convertedDate} at {convertedTime}
          </EventDateAndTime>
          <EventLocation>{location}</EventLocation>
        </DateTimeLocationWrapper>

        <EventTitleDescrWrapper>
          <EventTitle>{title}</EventTitle>
          <EventDescr>{displayText}</EventDescr>
          <MoreInfoLink
            to={`/event/${id}`}
            state={{ from: linkLocation }}
            $isDisabled={checkEventStatus(date)}
          >
            {checkEventStatus(date) ? 'Expired' : 'More info'}
          </MoreInfoLink>
        </EventTitleDescrWrapper>
      </EventInfoThumb>
    </EventListItemStyled>
  );
};

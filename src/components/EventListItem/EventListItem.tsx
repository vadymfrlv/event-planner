import { Event } from 'types/event';

import {
  EventListItemStyled,
  CategoryPriorityWrapper,
  EventCategory,
  EventPriority,
  EventPicture,
} from './EventListItem.styled';

import defaultPicSquare from 'assets/images/defaults/default-square.png';

export const EventListItem = (props: Event) => {
  const { id, title, description, time, date, location, category, picture, priority } = props;
  return (
    <EventListItemStyled>
      <CategoryPriorityWrapper>
        <EventCategory>{category.label}</EventCategory>
        <EventPriority $priorityLevel={priority.value}>{priority.label}</EventPriority>
      </CategoryPriorityWrapper>
      <EventPicture src={picture ? picture : defaultPicSquare} alt={category.label} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{time}</p>
      <p>{date}</p>
      <p>{location}</p>
    </EventListItemStyled>
  );
};

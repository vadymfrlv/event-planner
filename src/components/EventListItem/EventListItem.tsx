import { Event } from 'types/event';

import { EventListItemStyled } from './EventListItem.styled';

export const EventListItem = (props: Event) => {
  const { id, title, description, time, date, location, category, picture, priority } = props;
  return (
    <EventListItemStyled>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{time}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{category.value}</p>
      <p>{priority.value}</p>
      <img src={picture} alt="" />
    </EventListItemStyled>
  );
};

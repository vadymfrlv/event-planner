import { BackButton } from 'components/BackButton/BackButton';
import { useEventByIdQuery } from 'utils/hooks/useEventByIdQuery';
// import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  // const { eventId } = useParams();
  const { data: event, isSuccess } = useEventByIdQuery();
  console.log(event);

  return (
    <>
      <BackButton />
    </>
  );
};

export default EventDetailsPage;

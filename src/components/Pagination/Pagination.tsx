import { Event } from 'types/event';
import { PaginationContainer, Button, PageText } from './Pagination.styled';

interface useEventsQueryProps {
  data: Event[] | undefined;
  total: number | undefined;
  isPreviousData: boolean;
}

interface PaginationProps extends useEventsQueryProps {
  allEvents: Event[];
  currentPage: number;
  limitPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const {
    allEvents,
    total: totalEvents = allEvents.length,
    isPreviousData,
    currentPage,
    limitPerPage,
    onPageChange,
  } = props;

  const pageCount = totalEvents ? Math.ceil(totalEvents / limitPerPage) : 0;

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <PaginationContainer>
      <Button
        type="button"
        disabled={currentPage === 1 || isPreviousData}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &#x276E;
      </Button>
      <PageText>{currentPage}</PageText>
      <Button
        type="button"
        disabled={currentPage === pageCount || isPreviousData}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &#x276F;
      </Button>
    </PaginationContainer>
  );
};

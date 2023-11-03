import { Event } from 'types/event';
import { PaginationContainer, Button, PageText } from './Pagination.styled';

interface useEventsQueryProps {
  data: Event[];
  total: number | undefined;
  isPreviousData: boolean;
}

interface PaginationProps extends useEventsQueryProps {
  currentPage: number;
  limitPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const {
    data: events,
    // total: totalEvents,
    isPreviousData,
    currentPage,
    limitPerPage,
    onPageChange,
  } = props;

  //   const pageCount = totalEvents ? Math.ceil(totalEvents / limitPerPage) : 0;
  const isLastPage = events && events.length < limitPerPage;

  return (
    <PaginationContainer>
      <Button
        type="button"
        disabled={currentPage === 1 || isPreviousData}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &#171;
      </Button>
      <PageText>{currentPage}</PageText>
      <Button
        type="button"
        // disabled={currentPage === pageCount || isPreviousData}
        disabled={isLastPage || isPreviousData}
        // onClick={() => onPageChange(currentPage + 1)}
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
      >
        &#187;
      </Button>
    </PaginationContainer>
  );
};

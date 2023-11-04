import { useState, useEffect } from 'react';

import { PagePanel } from 'components/PagePanel/PagePanel';
import { EventList } from 'components/EventList/EventList';
import { Pagination } from 'components/Pagination/Pagination';
import { useEventsQuery } from 'utils/hooks/useEventsQuery';
import { useEventsWithPaginationQuery } from 'utils/hooks/useEventsWithPaginationQuery';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(8);

  useEffect(() => {
    const setLimitBasedOnWidth = () => {
      if (window.matchMedia('(max-width: 1439px)').matches) {
        setLimitPerPage(6);
      } else {
        setLimitPerPage(8);
      }
    };

    setLimitBasedOnWidth();
    window.addEventListener('resize', setLimitBasedOnWidth);

    return () => window.removeEventListener('resize', setLimitBasedOnWidth);
  }, []);

  // since mockapi.io does not return total I need to make additional request to receive all events
  const { data: allEvents } = useEventsQuery();
  const queryResults = useEventsWithPaginationQuery(currentPage, limitPerPage);
  const { isSuccess } = queryResults;

  const shouldShowPagination = isSuccess && allEvents && allEvents.length > limitPerPage;

  return (
    <>
      <PagePanel />
      <EventList {...queryResults} />
      {shouldShowPagination && (
        <Pagination
          {...{ ...queryResults, allEvents, currentPage, limitPerPage }}
          onPageChange={page => setCurrentPage(page)}
        />
      )}
    </>
  );
};

export default HomePage;

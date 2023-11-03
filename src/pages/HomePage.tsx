import { useState } from 'react';

import { PagePanel } from 'components/PagePanel/PagePanel';
import { EventList } from 'components/EventList/EventList';
import { Pagination } from 'components/Pagination/Pagination';
import { useEventsWithPaginationQuery } from 'utils/hooks/useEventsWithPaginationQuery';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(8);

  const queryResults = useEventsWithPaginationQuery(currentPage, limitPerPage);
  return (
    <>
      <PagePanel />
      <EventList {...queryResults} />
      <Pagination
        {...{ ...queryResults, currentPage, limitPerPage }}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default HomePage;

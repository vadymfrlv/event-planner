import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';

const HomePage = lazy(() => import('pages/HomePage'));
const EventCreatePage = lazy(() => import('pages/EventCreatePage'));
const EventDetailsPage = lazy(() => import('pages/EventDetailsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<EventCreatePage />} />
        <Route path="event/:eventId" element={<EventDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

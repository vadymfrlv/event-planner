import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from 'layouts/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const EventCreatePage = lazy(() => import('pages/EventCreatePage'));
const EventDetailsPage = lazy(() => import('pages/EventDetailsPage'));
const EventEditPage = lazy(() => import('pages/EventEditPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="create-event" element={<EventCreatePage />} />
        <Route path="event/:eventId" element={<EventDetailsPage />} />
        <Route path="event-edit/:eventId" element={<EventEditPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

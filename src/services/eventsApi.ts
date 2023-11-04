import axios, { AxiosResponse } from 'axios';

import { Event, FetchEventsResult } from 'types/event';

axios.defaults.baseURL = 'https://6527bc53931d71583df149e3.mockapi.io';

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response: AxiosResponse<Event[]> = await axios('/events');
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchEventsWithPagination = async (
  page: number,
  limit: number
): Promise<FetchEventsResult> => {
  const response: AxiosResponse<Event[]> = await axios('/events', {
    params: {
      page,
      limit,
    },
  });

  const { data, headers } = response;

  return {
    events: data,
    total: headers['x-total-count'],
  };
};

export const fetchEventById = async (eventId: string): Promise<Event> => {
  try {
    const response: AxiosResponse<Event> = await axios(`/events/${eventId}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteEventById = async (eventId: string): Promise<void> => {
  try {
    await axios.delete(`/events/${eventId}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

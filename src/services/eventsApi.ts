import axios, { AxiosResponse } from 'axios';

import { Event } from 'types/event';

axios.defaults.baseURL = 'https://6527bc53931d71583df149e3.mockapi.io';

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response: AxiosResponse<Event[]> = await axios('/events');
    if (response.status !== 200) {
      throw new Error('Oops something went wrong!');
    }
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchEventById = async (eventId: string | undefined): Promise<Event> => {
  try {
    const response: AxiosResponse<Event> = await axios(`/events/${eventId}`);
    if (response.status !== 200) {
      throw new Error('Oops something went wrong!');
    }
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

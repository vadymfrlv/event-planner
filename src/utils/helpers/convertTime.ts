export const convertTime = (timeISO: string) => {
  const date = new Date(timeISO);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
  return formattedTime;
};

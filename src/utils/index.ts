export const setDateFormat = (date: string) => {
  const hours = new Date(date).getHours().toString().padStart(2, '0');
  const minutes = new Date(date).getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

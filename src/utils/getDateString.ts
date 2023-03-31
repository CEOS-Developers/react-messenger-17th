export const getDateString = (date: string) => {
  const dateTypeofDate = new Date(date);

  const today = new Date();
  const isToday =
    dateTypeofDate.getFullYear() === today.getFullYear() &&
    dateTypeofDate.getMonth() === today.getMonth() &&
    dateTypeofDate.getDate() === today.getDate();

  const hours: number = dateTypeofDate.getHours();
  const hours12: number = hours <= 12 ? hours : hours - 12;
  const minutes: string = String(dateTypeofDate.getMinutes()).padStart(2, "0");
  const amPm: string = hours <= 12 ? "오전" : "오후";
  return isToday
    ? `${amPm} ${hours12}:${minutes}`
    : `${today.getMonth()}월 ${String(today.getDate()).padStart(2, "0")}일`;
};

export const getDateString = (date: string) => {
  const dateStrToDate = new Date(date);

  const today = new Date();
  const isToday =
    dateStrToDate.getFullYear() === today.getFullYear() &&
    dateStrToDate.getMonth() === today.getMonth() &&
    dateStrToDate.getDate() === today.getDate();

  const hours: number = dateStrToDate.getHours();
  const hours12: number = hours <= 12 ? hours : hours - 12;
  const minutes: string = String(dateStrToDate.getMinutes()).padStart(2, "0");
  const amPm: string = hours <= 12 ? "오전" : "오후";

  return isToday
    ? `${amPm} ${hours12}:${minutes}`
    : `${dateStrToDate.getMonth() + 1}월 ${String(
        dateStrToDate.getDate()
      ).padStart(2, "0")}일`;
};

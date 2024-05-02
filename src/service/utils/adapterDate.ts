const options: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
};

export const formateDate = (date: string) => {
  const [day, month, year] = date.split(".");
  return new Date(
    Number(`20${year}`),
    Number(month) - 1,
    Number(day)
  ).toLocaleString("ru", options);
};

export const adapterDate = (date: string) => {
  const formatedDate = formateDate(date);
  const arr = formatedDate.split(" ");
  const day = arr[1];
  const month = arr[2];
  const year = arr[3];
  const dayWeek = `${arr[0].substring(0, arr[0].length - 1)}`;
  return `${day} ${month} ${year}, ${dayWeek}`;
};

// types
import { TCurrency } from "../types/filter";
import { ITicket } from "../types/ticket";
// utils
import { formateTicketPrice } from "./formateTicketPrice";

// TODO cделать получение актуального курса
const exangeRates = {
  USD: 90,
  EUR: 100,
  RUB: 1,
};

const changePrice = (price: string, currency: TCurrency) => {
  const formatedPrice = Number(
    price.replace(/\s/g, "").replace(/['₽', '$', '€']/g, "")
  );
  const newValue = formatedPrice / exangeRates[currency];
  return formateTicketPrice(newValue, currency);
};

export const changeTicketsPriceByCurrency = (
  tickets: Array<ITicket>,
  currency: TCurrency
) => {
  return tickets.map((ticket) => ({
    ...ticket,
    price: changePrice(ticket.price, currency),
  }));
};

import uniqid from "uniqid";
// types
import { IJson, ITicket } from "../types/ticket";
import { TCurrency } from "../types/filter";
// utils
import { formateTicketPrice } from "./formateTicketPrice";

const defaultCurrency: TCurrency = "RUB";

export const addapterJson = (json: {
  tickets: Array<IJson>;
}): Array<ITicket> => {
  const { tickets } = json;
  const sortedTickets = tickets.sort((a, b) => a.price - b.price);
  const result = sortedTickets.map((el) => ({
    ...el,
    key: uniqid(),
    price: formateTicketPrice(el.price, defaultCurrency),
    currency: defaultCurrency,
  }));
  return result;
};

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
  const result = tickets.map((el) => ({
    ...el,
    key: uniqid(),
    price: formateTicketPrice(el.price, defaultCurrency),
    currency: defaultCurrency,
  }));
  return result;
};

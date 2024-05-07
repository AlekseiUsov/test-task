// type
import { ICheckboxParams } from "../types/filter";
import { ITicket } from "../types/ticket";
// utils
import { adapterStops } from "./adapterStops";

export const createCheckboxesParams = (
  tickets: Array<ITicket>
): Array<ICheckboxParams> => {
  const obj: { [key: string]: { text: string; value: number | null } } = {};
  for (const ticket of tickets) {
    obj[ticket.stops] = {
      text: adapterStops(ticket.stops),
      value: ticket.stops,
    };
  }

  return [{ text: "Все", value: null }, ...Object.values(obj)];
};

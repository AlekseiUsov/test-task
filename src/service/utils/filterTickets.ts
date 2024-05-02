import { ITicket } from "../types/ticket";

export const filterTickets = (
  tickets: Array<ITicket>,
  filters: Array<number>
) => {
  return filters.length
    ? tickets.filter((ticket) => filters.includes(ticket.stops))
    : tickets;
};

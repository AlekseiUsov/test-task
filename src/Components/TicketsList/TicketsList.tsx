// styles
import styles from "./index.module.scss";
// React
import { FC } from "react";
// Types
import { ITicket } from "../../service/types/ticket";
// component
import { Ticket } from "./Ticket";

interface IProps {
  tickets: Array<ITicket>;
}

export const TicketsList: FC<IProps> = ({ tickets }) => {
  return (
    <ul className={styles.ticketList}>
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </ul>
  );
};

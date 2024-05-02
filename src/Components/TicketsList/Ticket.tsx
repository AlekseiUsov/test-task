// styles
import styles from "./index.module.scss";
import cn from "classnames";
// React
import { FC } from "react";
// types
import { ITicket } from "../../service/types/ticket";
// utils
import { adapterDate } from "../../service/utils/adapterDate";
import { adapterStops } from "../../service/utils/adapterStops";
// components
import { Button } from "antd";
import { Aeroflot, AirplaneIcon } from "../../static/images/svg/Icons";

interface IProps {
  ticket: ITicket;
}
export const Ticket: FC<IProps> = ({ ticket }) => {
  const { price } = ticket;
  const dateDeparture = adapterDate(ticket.departure_date);
  const dateArrival = adapterDate(ticket.arrival_date);
  const stops = adapterStops(ticket.stops);

  return (
    <li className={styles.ticket}>
      <div className={styles.price}>
        <div className={styles.icon}>
          <Aeroflot />
          <span>Аэрофлот</span>
        </div>
        <Button className={styles.button}>
          Купить <br />
          за {price}
        </Button>
      </div>
      <div className={styles.info}>
        <div className={styles.time}>
          <span>{ticket.departure_time}</span>
          <div className={styles.stops}>
            <span>{stops}</span>
            <div className={styles.icon}>
              <div className={styles.line}></div>
              <AirplaneIcon />
            </div>
          </div>
          <span>{ticket.arrival_time}</span>
        </div>
        <div className={styles.block}>
          <div className={styles.inner}>
            <span className={styles.city}>
              {ticket.origin}, {ticket.origin_name}
            </span>
            <span className={styles.date}>{dateDeparture}</span>
          </div>
          <div className={cn(styles.inner, styles.departure)}>
            <span className={styles.city}>
              {ticket.destination}, {ticket.destination_name}
            </span>
            <span className={styles.date}>{dateArrival}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

// styles
import styles from "./index.module.scss";
// React
import { useCallback, useEffect, useMemo, useState } from "react";
// data
import json from "../../service/data/tickets.json";
// utils
import { changeTicketsPriceByCurrency } from "../../service/utils/changeTicketsPriceByCurrency";
import { filterTickets } from "../../service/utils/filterTickets";
import { addapterJson } from "../../service/utils/addapterJson";
// types
import { ITicket } from "../../service/types/ticket";
import { TCurrency } from "../../service/types/filter";
// components
import { Filters } from "../Filters/Filters";
import { TicketsList } from "../TicketsList/TicketsList";

export const TicketsSearch = () => {
  const [stops, setStops] = useState<Array<number>>([]);
  const [currency, setСurrency] = useState<TCurrency>("RUB");
  const [tickets, setTickets] = useState<Array<ITicket>>([]);

  const changeFilters = useCallback((value: Array<number> | TCurrency) => {
    if (Array.isArray(value)) {
      setStops(value);
    } else {
      setСurrency(value);
    }
  }, []);

  const addaptedJson = useMemo(() => addapterJson(json), []);

  useEffect(() => {
    const tickets =
      currency !== "RUB"
        ? changeTicketsPriceByCurrency(addaptedJson, currency)
        : addaptedJson;
    const filteredTickets = filterTickets(tickets, stops);
    setTickets(filteredTickets);
  }, [stops, currency, addaptedJson]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.ticketsSearch}>
        <Filters
          changeFilters={changeFilters}
          currency={currency}
          stops={stops}
        />
        <TicketsList tickets={tickets} />
      </div>
    </div>
  );
};

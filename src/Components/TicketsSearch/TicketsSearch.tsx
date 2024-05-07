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
import { createCheckboxesParams } from "../../service/utils/createCheckboxesParams";
// types
import { ITicket } from "../../service/types/ticket";
import { ICheckboxParams, TCurrency } from "../../service/types/filter";
// components
import { Filters } from "../Filters/Filters";
import { TicketsList } from "../TicketsList/TicketsList";

export const TicketsSearch = () => {
  const [checkboxesParams, setCheckboxesParams] = useState<
    Array<ICheckboxParams>
  >([]);
  const [stops, setStops] = useState<Array<number | null>>([]);
  const [currency, setСurrency] = useState<TCurrency>("RUB");
  const [tickets, setTickets] = useState<Array<ITicket>>([]);

  const changeFilters = useCallback(
    (value: Array<number | null> | TCurrency) => {
      if (Array.isArray(value)) {
        setStops(value);
      } else {
        setСurrency(value);
      }
    },
    []
  );

  const addaptedJson = useMemo(() => addapterJson(json), []);

  useEffect(() => {
    const checkboxesParams = createCheckboxesParams(addaptedJson);

    if (!stops.length) {
      const defaultStops = checkboxesParams.map((el) => el.value);
      setStops(defaultStops);
    }
    const tickets =
      currency !== "RUB"
        ? changeTicketsPriceByCurrency(addaptedJson, currency)
        : addaptedJson;
    const filteredTickets = filterTickets(tickets, stops);

    setCheckboxesParams(checkboxesParams);
    setTickets(filteredTickets);
  }, [stops, currency, addaptedJson]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.ticketsSearch}>
        <Filters
          checkboxesParams={checkboxesParams}
          changeFilters={changeFilters}
          currency={currency}
          stops={stops}
        />
        <TicketsList tickets={tickets} />
      </div>
    </div>
  );
};

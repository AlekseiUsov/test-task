// styles
import styles from "./index.module.scss";
// React
import { FC } from "react";
// types
import { IFilter } from "../../service/types/filter";
// components
import { Currency } from "./Currency";
import { Stops } from "./Stops";

export const Filters: FC<IFilter> = ({ changeFilters, currency, stops }) => {
  return (
    <div className={styles.filters}>
      <Currency changeFilters={changeFilters} currency={currency} />
      <Stops changeFilters={changeFilters} stops={stops} />
    </div>
  );
};

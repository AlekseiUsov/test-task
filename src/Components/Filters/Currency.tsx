// styles
import styles from "./index.module.scss";
// React
import { FC, memo } from "react";
// types
import { TFilterCurrency, TCurrency } from "../../service/types/filter";
// components
import { Segmented } from "antd";

const currencies: Array<TCurrency> = ["RUB", "USD", "EUR"];

export const Currency: FC<TFilterCurrency> = memo(
  ({ changeFilters, currency }) => {
    return (
      <>
        <span className={styles.text}>ВАЛЮТА</span>
        <Segmented
          className={styles.currency}
          block
          options={currencies}
          defaultValue={currency}
          onChange={changeFilters}
        />
      </>
    );
  }
);

// styles
import styles from "./index.module.scss";
import cn from "classnames";
// React
import { FC, memo } from "react";
// types
import { TFilterStops } from "../../service/types/filter";
// components
import { Button, Checkbox } from "antd";

const defaultStops = [
  { text: "Без пересадок", value: 0 },
  { text: "1 пересадка", value: 1 },
  { text: "2 пересадки", value: 2 },
  { text: "3 пересадки", value: 3 },
];

export const Stops: FC<TFilterStops> = memo(({ changeFilters, stops }) => {
  const filterStops = (value: number) => {
    const newStops = stops.includes(value) && stops.length === 1 ? [] : [value];
    changeFilters(newStops);
  };

  const changeStops = (value: number, stops: Array<number>) => {
    const newStops = stops.includes(value)
      ? stops.filter((el) => el !== value)
      : [...stops, value];
    changeFilters(newStops);
  };

  return (
    <>
      <span className={styles.text}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {defaultStops.map((stop) => (
        <Checkbox
          key={stop.value}
          checked={stops.includes(stop.value)}
          onClick={() => changeStops(stop.value, stops)}
        >
          {stop.text}
          <Button
            onClick={() => filterStops(stop.value)}
            type="text"
            className={cn(styles.hidden, styles.button)}
          >
            ТОЛЬКО
          </Button>
        </Checkbox>
      ))}
    </>
  );
});

// styles
import styles from "./index.module.scss";
import cn from "classnames";
// React
import { FC, memo } from "react";
// types
import { TFilterStops } from "../../service/types/filter";
// components
import { Button, Checkbox } from "antd";

export const Stops: FC<TFilterStops> = memo(
  ({ changeFilters, checkboxesParams, stops }) => {
    const filterStops = (value: number | null) => {
      const newStops =
        stops.includes(value) && stops.length === 1 ? [] : [value];
      changeFilters(newStops);
    };

    const changeStops = (value: number | null, stops: Array<number | null>) => {
      if (value === null) {
        const newStops = !stops.includes(value)
          ? checkboxesParams.map((el) => el.value)
          : [];
        changeFilters([...newStops]);
      } else {
        const filtredStops = stops.filter((el) => el !== null);
        const newStops = filtredStops.includes(value)
          ? filtredStops.filter((el) => el !== value)
          : [...filtredStops, value];
        changeFilters(newStops);
      }
    };

    return (
      <>
        <span className={styles.text}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        {checkboxesParams.map((params, index) => (
          <Checkbox
            key={index}
            checked={stops.includes(params.value)}
            onClick={() => changeStops(params.value, stops)}
          >
            {params.text}
            {params.value !== null && (
              <Button
                onClick={() => filterStops(params.value)}
                type="text"
                className={cn(styles.hidden, styles.button)}
              >
                ТОЛЬКО
              </Button>
            )}
          </Checkbox>
        ))}
      </>
    );
  }
);

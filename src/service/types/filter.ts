export type TCurrency = "RUB" | "USD" | "EUR";

export interface IFilter {
  changeFilters: (value: Array<number> | TCurrency) => void;
  currency: TCurrency;
  stops: Array<number>;
}

export type TFilterStops = Omit<IFilter, "currency">;
export type TFilterCurrency = Omit<IFilter, "stops">;

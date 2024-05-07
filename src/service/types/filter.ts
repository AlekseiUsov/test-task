export type TCurrency = "RUB" | "USD" | "EUR";

export interface ICheckboxParams {
  text: string;
  value: number | null;
}

export interface IFilter {
  changeFilters: (value: Array<number | null> | TCurrency) => void;
  currency: TCurrency;
  checkboxesParams: Array<ICheckboxParams>;
  stops: Array<number | null>;
}

export type TFilterStops = Omit<IFilter, "currency">;
export type TFilterCurrency = Omit<IFilter, "stops" | "checkboxesParams">;

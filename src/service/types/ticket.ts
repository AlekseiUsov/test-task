import { TCurrency } from "./filter";

export interface IJson {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export interface ITicket extends Omit<IJson, "price"> {
  key: string;
  price: string;
  currency: TCurrency;
}

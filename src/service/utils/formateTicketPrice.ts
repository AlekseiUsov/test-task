import { TCurrency } from "../types/filter";

function formateValue(value: string) {
  const arr = value.split(",");
  return `${arr[0]} ${arr[1][3]}`;
}

enum Currency {
  STYLE_CURRENCY = "currency",
  LOCALE_RU = "ru-RU",
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

export const formateTicketPrice = (
  number: number | string,
  currency: TCurrency
): string => {
  if (currency === "USD") {
    const formattedNumber = new Intl.NumberFormat(Currency.LOCALE_RU, {
      style: Currency.STYLE_CURRENCY,
      currency: Currency.USD,
    }).format(+number);
    return formateValue(formattedNumber);
  }
  if (currency === "EUR") {
    const formattedNumber = new Intl.NumberFormat(Currency.LOCALE_RU, {
      style: Currency.STYLE_CURRENCY,
      currency: Currency.EUR,
    }).format(+number);
    return formateValue(formattedNumber);
  }
  const formattedNumber = new Intl.NumberFormat(Currency.LOCALE_RU, {
    style: Currency.STYLE_CURRENCY,
    currency: Currency.RUB,
  }).format(+number);
  return formateValue(formattedNumber);
};

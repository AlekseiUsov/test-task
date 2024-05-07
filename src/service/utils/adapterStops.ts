export const adapterStops = (stops: number) => {
  if (stops === null) {
    return "Все";
  }
  if (stops === 0) {
    return "Без пересадок";
  }
  if (stops === 1) {
    return "1 пересадка";
  }
  if (stops > 1 && stops < 5) {
    return `${stops} пересадки`;
  }
  return `${stops} пересадок`;
};

export const adapterStops = (stops: number) => {
  if (stops === 0) {
    return "Без пересадок";
  }
  if (stops === 1) {
    return "1 пересадка";
  }
  return `${stops} пересадки`;
};

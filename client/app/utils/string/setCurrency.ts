export const setCurrency = (price: number | string, currency: string = '$', currencyFirst = true) => {
  if (currencyFirst) return currency + price;
  return price + currency;
};

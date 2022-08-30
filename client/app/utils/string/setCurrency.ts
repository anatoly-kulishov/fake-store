export const setCurrency = (price: number | string, currency = '$', currencyFirst = true) => {
  if (currencyFirst) return currency + price;
  return price + currency;
};

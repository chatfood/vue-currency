import formatMoney from "./formatMoney";

export default (
  value,
  { symbol, thousand, precision, decimal, symbolFirst, symbolSeparator }
) => {
  let result = 0.0;

  const isNegative = String(value).charAt(0) === "-";

  if (isNegative) {
    value = String(value).slice(1);
  }

  const amount = parseFloat(value);

  if (!isNaN(amount)) {
    result = amount;
  }

  const format = symbolFirst
    ? `%s${symbolSeparator}%v`
    : `%v${symbolSeparator}%s`;

  result = formatMoney(value, {
    format,
    symbol,
    precision,
    thousand,
    decimal
  });

  if (isNegative) {
    result = `-${result}`;
  }

  return result;
};

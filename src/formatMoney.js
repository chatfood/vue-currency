const defaultCurrency = {
  format: "%s%v",
  symbol: "$",
  precision: 2,
  thousand: ",",
  decimal: "."
};

const formatNumber = (number, precision, thousand, decimal) => {
  number = Math.abs(number || 0);

  const numberFixed = number.toFixed(precision);
  const negative = number < 0 ? "-" : "";
  const base = String(parseInt(numberFixed, 10));
  const mod = base.length > 3 ? base.length % 3 : 0;

  return (
    negative +
    (mod ? base.substr(0, mod) + thousand : "") +
    base.substr(mod).replace(/(\d{3})(?=\d)/g, `$1${thousand}`) +
    (precision ? decimal + numberFixed.split(".")[1] : "")
  );
};

const formatMoney = (number, params = {}) => {
  number = Number.parseFloat(number);

  const options = Object.assign(defaultCurrency, params);
  const formattedNumber = formatNumber(
    number,
    options.precision,
    options.thousand,
    options.decimal
  );

  return options.format
    .replace("%s", options.symbol)
    .replace("%v", formattedNumber);
};

export default formatMoney;

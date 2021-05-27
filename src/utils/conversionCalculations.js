function percentage(num, per) {
  return (num / 100) * per;
}

export function moneyConversion(value, stateTax, dolarCotation) {
  const withTax = value + (value / 100) * stateTax;
  const converted = withTax * (dolarCotation + percentage(dolarCotation, 1.1));
  return Number(converted.toFixed(2));
}

export function cardConversion(value, stateTax, dolarCotation) {
  const withTax = value + (value / 100) * stateTax;
  const converted = withTax * dolarCotation;
  const plusIof = converted + percentage(converted, 6.4);

  return Number(plusIof.toFixed(2));
}

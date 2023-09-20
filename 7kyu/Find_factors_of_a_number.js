function factors(x) {
  if (x < 1 || !Number.isInteger(x)) return -1;

  const factorsNumbers = [];

  for (let i = x; i >= 1; i--) {
    if (x % i === 0) factorsNumbers.push(i);
  }

  return factorsNumbers;
}

console.log(factors(68));

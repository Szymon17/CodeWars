const countDifference = (n1, n2, iteration) => (n2 - n1) * 256 ** (4 - iteration - 1);

const ipsBetween = (start, end) => {
  const startAdrees = start.split(".");
  const endAdrees = end.split(".");

  let difference = 0;

  for (let i = startAdrees.length - 1; i >= 0; i--) {
    const n1 = Number(startAdrees[i]);
    const n2 = Number(endAdrees[i]);

    if (n1 < n2) difference += countDifference(n1, n2, i);
    else if (n1 > n2) difference -= countDifference(n1, n2, i) * -1;
  }

  return difference;
};

console.log(ipsBetween("170.0.0.0", "170.1.0.0"));

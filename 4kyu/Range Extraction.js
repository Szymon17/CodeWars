function solution(list) {
  const result = [];
  let rangeCount = 0;
  let i = 1;

  while (true) {
    const element = list[i];
    const previousElement = list[i - 1];

    if (element - 1 === previousElement) rangeCount++;
    else if (rangeCount) {
      const firstNumber = list[i - rangeCount - 1];
      const lastNumber = list[i - 1];

      if (rangeCount === 1) result.push(firstNumber, lastNumber);
      else result.push(`${firstNumber}-${lastNumber}`);

      rangeCount = 0;
    } else result.push(previousElement);

    i++;

    if (element === undefined || previousElement === undefined) break;
  }

  return result.join(",");
}

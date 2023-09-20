function killKthBit(n, k) {
  const binary = n.toString(2).split("");

  console.log(n.toString(2));
  binary[binary.length - k] = 0;
  const result = binary.join("");
  return parseInt(result, 2);
}

console.log(killKthBit(374823748, 13));

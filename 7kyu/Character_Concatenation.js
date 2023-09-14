function charConcat(string) {
  let result = "";

  for (let i = 0; i < string.length / 2; i++) {
    if (string.length - i - 1 === i) break;

    result += string[i];
    result += string[string.length - i - 1];
    result += i + 1;
  }

  return result;
}

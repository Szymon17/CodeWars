// const persistence = num => {
//   let numberArray = num.toString().split("");

//   let loopCount = 0;

//   while (numberArray.length > 1) {
//     numberArray = numberArray
//       .reduce((prv, cur) => Number(prv) * Number(cur))
//       .toString()
//       .split("");
//     loopCount++;
//   }

//   return loopCount;
// };

const persistence = num => (`${num}`.length > 1 ? 1 + persistence(`${num}`.split("").reduce((p, c) => Number(p) * Number(c))) : 0);

console.log(persistence(39));

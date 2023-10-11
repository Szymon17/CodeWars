// const neutralise = (s1, s2) => {
//   let restult = "";

//   for (let i = 0; i < s1.length; i++) {
//     switch (s1[i]) {
//       case "+":
//         if (s2[i] === "+") restult += "+";
//         else restult += "0";
//         break;
//       case "-":
//         if (s2[i] === "-") restult += "-";
//         else restult += "0";
//         break;
//     }
//   }

//   return restult;
// };

// console.log(neutralise("-++-", "-+-+"));

const neutralise = (s1, s2) => [...s1].map((el, index) => (el === s2[index] ? el : "0")).join("");

console.log(neutralise("-++-", "-+-+"));

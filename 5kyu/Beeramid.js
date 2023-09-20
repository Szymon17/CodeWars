// const beeramid = (bonus, price) => {
//   let bearsCount = bonus / price;
//   let level = 0;
//   let bearsOnWall = (level + 1) * (level + 1);

//   while (bearsCount >= bearsOnWall) {
//     level++;
//     bearsCount -= level * level;
//     bearsOnWall = (level + 1) * (level + 1);
//   }

//   return level;
// };

const beeramid = (bonus, price, level = 1) => {
  if (level ** 2 * price > bonus) return level - 1;
  else return beeramid(bonus - level ** 2 * price, price, level + 1);
};

console.log(beeramid(21, 1.5));

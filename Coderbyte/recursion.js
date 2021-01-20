//combinations using recursion
//find all combinations of [a,b,c]

const combinations = (arr) => {
  if (arr.length === 0) return [[]];
  const firstEl = arr[0];
  const rest = arr.slice(1);

  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];

  combsWithoutFirst.forEach((comb) => {
    let combWithFirst = [...comb, firstEl];
    console.log('comb', comb, '...comb', ...comb);
    combsWithFirst.push(combWithFirst);
  });

  return [...combsWithoutFirst, combsWithFirst];
};
combinations(['a', 'b', 'c']);
//time 2^n making 2 recursive calls for each function call
//space n^2  because n stack frames and line 7 creates addional array copy for each recursive call

function permutation(arr) {
  if (arr.length === 0) return [[]];

  const firstEl = arr[0];
  const rest = arr.slice(1);

  const combsWithoutFirst = permutation(rest);
  const allPermutations = [];

  combsWithoutFirst.forEach((comb) => {
    for (let = i = 0; i <= comb.length; i++) {
      let combinedWithFirst = [...comb.slice(0, i), firstEl, ...comb.slice(i)];
    }
  });

  return allPermutations;
}
//time n!
//space n^2  because n stack frames and the slice creates addional array copy for each recursive call

permutation([1, 2, 3]);

/**
 *
 * @param {number} num - Natural number
 * @returns {array | number} Fibonacci sequence with length equal to num. -1 if the num is invalid;
 */
const fibsRec = (num) => {
  if (Number(num) === NaN || num < 0) return -1;
  if (num === 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const prevFibs = fibsRec(num - 1);
  return [...prevFibs, prevFibs[num - 2] + prevFibs[num - 3]];
};

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // [0, 1, 1,  2, 3, 5, 8, 13]
fibsRec();

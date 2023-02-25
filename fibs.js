/**
 *
 * @param {number} num - Natural number
 * @returns {array | number} Fibonacci sequence with length equal to num. -1 if the num is invalid;
 */
const fibs = (num) => {
  if (Number(num) === NaN || num < 0) return -1;

  const fibNumbers = [];
  for (let i = 0; i < num; i++) {
    if (fibNumbers.length === 0) {
      fibNumbers.push(0);
    } else if (fibNumbers.length === 1) {
      fibNumbers.push(1);
    } else {
      fibNumbers.push(
        fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2]
      );
    }
  }
  return fibNumbers;
};

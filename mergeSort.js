/**
 * Sorting given array with mergesort algorithm
 * @param {Array} arr - Array of numbers that need to be sorted.
 * @returns {Array} return sorted array. return -1 if input is invalid.
 */
const mergeSort = (arr) => {
  if (!Array.isArray(arr)) return -1;
  if (arr.length <= 1) return arr;

  // split the array
  const middleIndex = Math.ceil(arr.length / 2);
  let sorted = [];
  const left = mergeSort(arr.slice(0, middleIndex));
  const right = mergeSort(arr.slice(middleIndex));

  // compare
  while (left[0] !== undefined && right[0] !== undefined) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
      sorted.push(right.shift());
    }
  }
  // always run after while condition, a.k.a when leftside or rightside has empty
  sorted = sorted.concat(left, right);
  return sorted;
};

console.log(mergeSort([3, 1, 2, 3, 1, 5, 2234, 12, 4, 5, 4]).toString()); // [1,1,2,3,3,4,4,5,5,12,2234]
console.log(mergeSort([3, 1, 2]));
console.log(mergeSort());

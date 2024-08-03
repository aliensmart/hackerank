/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here

  const sortedValue = arr.sort((a, b) => a - b);
  const minSum = sortedValue.slice(0, 4).reduce((acc, newVal) => acc + newVal);
  const maxVal = sortedValue
    .slice(1, arr.length)
    .reduce((acc, newVal) => acc + newVal);
  console.log(`${minSum} ${maxVal}`);
}

const arr = [1, 7, 3, 9, 5];

miniMaxSum(arr);

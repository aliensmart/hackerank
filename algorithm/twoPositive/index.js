/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const count = arr.length;
  const vals = {};
  vals.pos = 0;
  vals.neg = 0;
  vals.zero = 0;
  for (let i = 0; i < count; i++) {
    if (arr[i] < 0) {
      vals.neg += 1;
    }
    if (arr[i] > 0) {
      vals.pos += 1;
    }
    if (arr[i] === 0) {
      vals.zero += 1;
    }
  }

  vals.neg = vals.neg / count;
  vals.pos = vals.pos / count;
  vals.zero = vals.zero / count;

  const values = Object.values(vals);

  Object.values(vals).forEach((val) => {
    console.log(val?.toFixed(6));
  });
}

const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));

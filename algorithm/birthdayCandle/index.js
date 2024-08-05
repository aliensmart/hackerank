/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  let maxCandle = 0;
  let maxCount = 0;

  //   we first find the max candle
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maxCandle) {
      maxCandle = candles[i];
    }
  }
  //   then we count the max candle
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxCandle) {
      maxCount += 1;
    }
  }

  return maxCount;
}

const myArr = [3, 2, 1, 3];

console.log(birthdayCakeCandles(myArr));

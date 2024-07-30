function aVeryBigSum(ar) {
  // Write your code here
  const result = ar.reduce((acc, curr) => acc + curr, 0);
  return result;
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const ar2 = [110000039444, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar)); // 5000000015

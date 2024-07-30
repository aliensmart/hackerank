function compareTriplets(a, b) {
  let result = [];
  if (a.length === b.length) {
    let bob = 0;
    let alice = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        alice = alice + 1;
      }
      if (a[i] < b[i]) {
        bob = bob + 1;
      }
    }
    result = [alice, bob];
  }
  return result;
}
// Test the function
const a = [17, 28, 30];
const b = [99, 16, 8];
console.log(compareTriplets(a, b)); // Example test case

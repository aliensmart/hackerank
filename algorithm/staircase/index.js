/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  let value = "#";

  for (let i = 0; i < n; i++) {
    // console.log(" ".repeat(n - (i + 1)) + value.repeat(i + 1));
    for (let j = 0; j < n - (i + 1); j++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < i + 1; k++) {
      process.stdout.write("#");
    }

    // console.log("\n");
    process.stdout.write("\n");
  }
}

const n = 4;

staircase(4);

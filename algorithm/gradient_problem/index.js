/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  const roundVals = [];

  for (let grade of grades) {
    if (grade < 38 || grade % 5 === 0) {
      roundVals.push(grade);
    } else {
      // find next multiple of 5
      const roundValue = Math.ceil(grade / 5) * 5;
      let newVal = roundValue - grade < 3 ? roundValue : grade;
      roundVals.push(newVal);
    }
  }

  return roundVals;
}

const grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));

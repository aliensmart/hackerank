/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  // Split the time string into parts
  let [hours, minutes, secondsPeriod] = s.split(":");

  // Extract the period (AM/PM) and seconds
  let period = secondsPeriod.slice(-2);
  let seconds = secondsPeriod.slice(0, -2);

  // Convert hours based on period
  if (period === "AM") {
    hours = hours === "12" ? "00" : hours;
  } else {
    hours =
      hours === "12" ? hours : String(Number(hours) + 12).padStart(2, "0");
  }

  // Return the formatted time in 24-hour format
  return `${hours}:${minutes}:${seconds}`;
}

const theTime = "12:05:45AM";
timeConversion(theTime);

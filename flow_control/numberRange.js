/* Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive),
 greater than 100, or less than 0.*/
function numberRange (int) {
    if (int >= 0 && int < 51) {
        console.log(int + ' is between 0 and 50.')
    } else if (int > 50 && int < 101) {
        console.log(int + ' is between 51 and 100.')
    } else if (int > 100) {
        console.log(int + ' is greater than 100.')
    } else {
        console.log(int + ' is less than 0.')
    }
}

/* logic from solution is more succint. 
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
*/
let array = [3, 5, 7];
//arr.reduce((accumulator, element) => accumulator + element, 0)
function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + element * element, 0)
}
console.log(sumOfSquares(array));
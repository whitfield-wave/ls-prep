let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
   return array.filter(num => Number.isInteger(num))
}

let things2 = findIntegers(things);
console.log(things2);

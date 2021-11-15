let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkFor(array) {
  let newArray = array.filter(element => element === 3);
  if (newArray.length > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkFor(numbers1));
console.log(checkFor(numbers2));
console.log(checkFor(numbers3));

//forgot about the includes() method. heehee
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));
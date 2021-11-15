

/*
function oddLengths(array) {
  return (arr.filter(val => val.length % 2 !== 0)).map(str => str.length)
}

console.log(oddLengths(arr))

// failed attempt
function oddLengths(array) {
  //arr.reduce((accumulator, element) => accumulator + element, 0)
  array.reduce(function(accumulator,element) {
    if (element.length % 2 !== 0){ 
      console.log(element);
      return accumulator.push(element);
    }
  }, []);
}

console.log(oddLengths(arr));
*/

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
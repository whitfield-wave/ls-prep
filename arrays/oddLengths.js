let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return (arr.filter(val => val.length % 2 !== 0)).map(str => str.length)
}

console.log(oddLengths(arr))

//this took me way too long because I over complicated it. 
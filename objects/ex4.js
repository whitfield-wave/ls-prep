let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let myArray = [];

for (let prop in obj) {
  myArray.push(prop.toUpperCase())
}

console.log(myArray)
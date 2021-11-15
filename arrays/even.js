let myArray = [1, 3, 6, 11, 4, 2,
    4, 9, 17, 16, 0];

myArray.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num)
    }
});

let myArray2 = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

myArray2.forEach(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 === 0) {
            console.log(num)
        }
    });
});
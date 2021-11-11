let multiply = (a,b) => a*b;
let getNumber = function (prompt) {
    let rlSync = require('readline-sync');
    return parseFloat(rlSync.question(prompt));
}

let leftNum = getNumber("Enter the first number: ");
let rightNum = getNumber("Enter the second number: ");

console.log(`${leftNum} * ${rightNum} = ${multiply(leftNum,rightNum)}`);

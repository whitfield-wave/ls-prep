/*
initial attempt. Technically correct but wrong methodology? 

let rlSync = require('readline-sync');
function whatsName () {
    let firstName = rlSync.question("What's your first name?\n");
    let lastName = rlSync.question("What's your last name?\n");
    return firstName + ' ' + lastName;
}

console.log(`Hello, ${whatsName()}!`);
*/

function getName(prompt) {
    let rlSync = require('readline-sync');
    let name = rlSync.question(prompt);
    return name;
}

let firstName = getName("What's your first name? ");
let lastName = getName("What's your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);
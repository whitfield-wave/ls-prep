
function evenOrOdd (num) {
    if (Number.isInteger(num)){
        if (!(num % 2)) {
            console.log(`${num} is even!`)
        }   else {
            console.log(`${num} is odd.`)
        }
    } else {
        console.log('ERROR! Please enter an integer.')
    }
}

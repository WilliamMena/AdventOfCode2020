const fs = require('fs');

const inputs = [];
fs.readFile('./day2_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n'))
    // console.log(inputs)
    // findTwo(inputs);
    console.log(inputs.length)
    console.log(inputs.reduce(function (acc, pass)  {
        if (checkNewMatch(pass)) {
            return acc + 1
        } else {
            return acc
        }
    }, 0))
});

function checkMatch(input) {
    const inputArray = input.split(' ');
    let reg = new RegExp( inputArray[1][0], 'g' );
    let match = inputArray[2].match(reg);
    let minMax = inputArray[0].split('-')
    let min = minMax[0];
    let max = minMax[1];

    if (match) {
        if (match.length >= min && match.length <= max) {
            return true
        }
    }
    // console.log(`Min: ${min} --- Max: ${max}`)
    return false;
}

function checkNewMatch(input) {
    const inputArray = input.split(' ');
    let letter = inputArray[1][0];
    let positions = inputArray[0].split('-')
    let index1 = positions[0];
    let index2 = positions[1];
    let password = inputArray[2]

    console.log(inputArray[2])
    console.log(`Ind1: ${index1} --- Ind2: ${index2}`)
    console.log(letter);

    if (password[index1 - 1] != password[index2 - 1]) {
        if (letter == password[index1 - 1] || letter == password[index2 - 1]) {
            console.log('True')
            console.log('\n')
            return true
        }
    }
    console.log('False')
    console.log('\n')
    return false;
}

// Wrong Answers
/*
    598 (wrong)
    688 (I think too low, can't remember)
    867 Too High

*/



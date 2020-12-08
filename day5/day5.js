const fs = require('fs');

const inputs = [];
fs.readFile('./day5_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n'))
    // console.log(inputs);
    // console.log(validPassports(inputs));

});
const fs = require('fs');

const inputs = [];
fs.readFile('./day16_few_input.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n'))
    console.log(followSteps(inputs));

    // I believe the best way is to iterate through the steps, following order but for each step, overwrite with a "Yes" when done. So when iterating, first thing to check is (if "yes" => end/break)
});

function followSteps(input) {
    console.log(input);
}
/*
    Answers

    Part 1
        1797

    Part 2

*/
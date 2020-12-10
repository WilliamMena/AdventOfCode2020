const fs = require('fs');

const inputs = [];
fs.readFile('./day7_few_input.txt', 'utf8', function (err, data) {
    // fs.readFile('./day5_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n\n'))
    console.log(sumOfAnswers(inputs));
});



/*
    Answers

    Part 1
        

    Part 2
        
*/
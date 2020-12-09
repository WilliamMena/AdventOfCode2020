const fs = require('fs');

const inputs = [];
fs.readFile('./day6_input.txt', 'utf8', function (err, data) {
    // fs.readFile('./day5_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n\n'))
    console.log(sumOfAnswers(inputs));
});

function sumOfAnswers(array) {
    return array.map((t) => {
        return checkCountUpdate(t)
    }).reduce((curr, itt) => {
        return curr + itt;
    }, 0)
}

function checkCount(group) {
    let curr = group.split('\n').join('').split('');
    let count = 0;
    
    curr.forEach((n, index) => {
        if (curr.indexOf(n) === index) {
            count += 1;
        }
    })

    return count;
}

function checkCountUpdate(group) {
    // If fail, compensate for when a person has duplicate values
    let curr = group.split('\n');
    let size = curr.length;

    let map = new Map();

    curr.join('').split('').forEach((c) => {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1)
        } else {
            map.set(c, 1);
        }
    })

    let count = 0;
    
    map.forEach((val, key) => {
        if (val == size) {
            count += 1;
        }
    })
    // console.log(size);
    // console.log(map);
    // console.log(count);
    // console.log('\n')
    return count;
}


/*
    Answers

    Part 1
        6714

    Part 2
        6 (wrong)
        3435
*/
const fs = require('fs');

const inputs = [];
fs.readFile('./day8_input.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n'))
    console.log(followSteps(inputs));

    // I believe the best way is to iterate through the steps, following order but for each step, overwrite with a "Yes" when done. So when iterating, first thing to check is (if "yes" => end/break)
});

function followSteps(array) {
    console.log(array);
    let acc = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 'YES') {
            console.log(array[i])
            if (array[i].slice(0, 3) == "acc") {
                if (array[i][4] == "+") {
                    acc += parseInt(array[i].split("+")[1]);
                } else {
                    acc -= parseInt(array[i].split("-")[1]);
                }
                array[i] = 'YES';
            } else if (array[i].slice(0, 3) == "jmp") {
                if (array[i][4] == "+") {
                    let num = parseInt(array[i].split("+")[1]);
                    array[i] = 'YES';
                    i += (num - 1);
                } else {
                    let num = parseInt(array[i].split("-")[1]);
                    array[i] = 'YES';
                    i -= (num + 1);
                }
            }

        } else {
            break;
        }
    }
    console.log(array)
    return acc;
}

/*
    Answers

    Part 1
        1797

    Part 2

*/
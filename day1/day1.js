const fs = require('fs');

const inputs = [];
fs.readFile('./day1_inputs.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    inputs.push(...data.split('\n'))
    // console.log(inputs)
    findTwo(inputs);
    // findThree(inputs);
  });

function findTwo(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            let num1 = Number.parseInt(data[i]);
            let num2 = Number.parseInt(data[j]);
            if (num1 + num2 == 2020) {
                console.log(num1 * num2)
                return num1 * num2
            }
        }
    }
}

function findThree(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length - 1; j++) {
            for (let k = i + 2; k < data.length - 2; k++) {
                let num1 = Number.parseInt(data[i]);
                let num2 = Number.parseInt(data[j]);
                let num3 = Number.parseInt(data[k]);

                if (num1 + num2 + num3 == 2020) {
                    console.log(num1 * num2 * num3)
                    return num1 * num2 * num3
                }
            }
        }
    }
}


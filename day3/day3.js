const fs = require('fs');

const inputs = [];
fs.readFile('./day3_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n'))
    // console.log(inputs.length)
    // findTwo(inputs);
    // console.log(countTreesWithInput(inputs, 3, 1));
    
    let partTwoInputs = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    console.log(multiplyTreeCount(inputs, partTwoInputs))

});

function countTrees(inputArray) {
    let depth = inputArray.length - 1;
    let width = inputArray[0].length;
    let i = 0;
    let j = 0;
    let treeCount = 0;

    while (i < depth) {
        i += 1;
        if (j + 3 >= width) {
            j -= width;
        }
        j += 3
        if (inputArray[i][j] === '#') {
            treeCount += 1;
        }
    }

    return treeCount;
};

function countTreesWithInput(inputArray, r, d) {
    let depth = inputArray.length - 1;
    let width = inputArray[0].length;
    let i = 0;
    let j = 0;
    let treeCount = 0;

    while (i < depth) {
        i += d;
        if (j + r >= width) {
            j -= width;
        }
        j += r
        if (inputArray[i][j] === '#') {
            treeCount += 1;
        }
    }

    return treeCount;
};

function multiplyTreeCount(input, combo) {
    return combo.reduce((acc, curr) => {
        return countTreesWithInput(input, curr[0], curr[1]) * acc;
    }, 1)
}


// Answers
/*
    PART 1
    9
    265 (CORRECT)

    PART 2
    3154761400 (First attempt!!!)
*/



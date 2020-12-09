const fs = require('fs');

const inputs = [];
fs.readFile('./day5_single_input.txt', 'utf8', function (err, data) {
    // fs.readFile('./day5_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n'))
    console.log(highestID(inputs));
});

// function highestID(rows) {
//     let column = rows[0].slice(0, 7);
//     let row = rows[0].slice(7);
//     let highest = 0;

//     rows.forEach(r => {
//         let id = checkSeatID(r);

//         if (id > highest) {
//             highest = id;
//         }
//     });

//     return highest;
// }

function highestID(rows) {
    let column = rows[0].slice(0, 7);
    let row = rows[0].slice(7);

    let allSeats = rows.map(r => {
        return checkSeatID(r);
    }).sort( (a, b) => a - b );

    // console.table(allSeats)

    for (let i = 0; i < allSeats.length - 1; i++) {
        if ((allSeats[i + 1] - allSeats[i]) == 2) {
            return allSeats[i] + 1
        }
    }
    return 0
}

function checkSeatID(seat) {
    let row = seat.slice(0, 7);
    let column = seat.slice(7);

    let rowVal = checkRow(row)
    let columnVal = checkColumn(column)

    return (rowVal * 8) + columnVal;
}

function checkRow(seat) {
    let top = 127;
    let bottom = 0;

    seat.split('').forEach(c => {
        if (c == 'F') {
            top = Math.floor((top + bottom) / 2)
        } else {
            bottom = Math.ceil((top + bottom) / 2)
        }
        // console.log(`T: ${top}, B: ${bottom}`);
    })

    if (seat[6] == 'F') {
        // console.log(bottom);
        return bottom
    } else {
        // console.log(top);
        return top
    }
}


// Work on column, not sure if correct output.
function checkColumn(seat) {
    let top = 7;
    let bottom = 0;

    seat.split('').forEach(c => {
        if (c == 'L') {
            top = Math.floor((top + bottom) / 2)
        } else {
            bottom = Math.ceil((top + bottom) / 2)
        }
    })

    if (seat[2] == 'L') {
        // console.log('bottom');
        // console.log(bottom);
        return bottom
    } else {
        // console.log('top');
        // console.log(top);
        return top
    }
}






/*
    Answers

    Part 1
    980

    Part 2
    607



*/
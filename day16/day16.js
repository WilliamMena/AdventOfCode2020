const fs = require('fs');

const inputs = [];
fs.readFile('./day16_input.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n\n'))
    console.log(ticketScan(inputs));

    // I believe the best way is to iterate through the steps, following order but for each step, overwrite with a "Yes" when done. So when iterating, first thing to check is (if "yes" => end/break)
});

function ticketScan(input) {
    let rulesArray = input[0].split('\n').map((r) => {
        return r.split(': ')[1].split(' or ');
    }).flat()
    
    let nearTickets = input[2].split('\n').slice(1).map((t) => {
        return t.split(',');
    }).flat()

    return checkValidTickets(rulesArray, nearTickets).reduce((cur, acc) => {
        return acc += cur;
    }, 0);
}

function checkValidTickets(rules, tickets) {
    // rules: [ '1-3', '5-7', '6-11', '33-44', '13-40', '45-50' ]
    let errorRate = [];
    // console.log(tickets);
    tickets.forEach((t) => {
        // t: [ '7', '3', '47' ]
        let add = false;
        // console.log(t);
        t = parseInt(t);

        add = rules.every((r) => {
            let ruleSplit = r.split('-')
            let min = parseInt(ruleSplit[0]);
            let max = parseInt(ruleSplit[1]);


            if (min > t || max < t) {
                return true;
            }
        })

        if (add) {
            errorRate.push(t);
        }

        // console.log(rules)
    })

    console.log(errorRate);
    return errorRate;
}
/*
    Answers

    Part 1
        28884

    Part 2

*/
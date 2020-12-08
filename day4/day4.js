const fs = require('fs');

const inputs = [];
fs.readFile('./day4_inputs.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    inputs.push(...data.split('\n\n'))
    console.log(validPassports(inputs));

});

function cleanData(array) {
    return array.map(pass => pass.split('\n').join(' ').split(' '))
}

function validPassports(inputs) {
    let cleanArray = cleanData(inputs);
    let reqFields = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"]

    // return cleanArray.reduce((acc, cur) => {
    //     if (checkPassport(cur, reqFields)) {
    //         return acc + 1
    //     }
    //     return acc;
    // }, 0)

    return cleanArray.reduce((acc, cur) => {
        if (checkPassportStrict(cur, reqFields)) {
            return acc + 1
        }
        return acc;
    }, 0)
}

function checkPassport(pass, reqFields) {
    if (pass.length >= 7) {
        let currentPass = pass.map(p => p.split(':')[0]).sort();
        return reqFields.every(r => currentPass.includes(r));
    }
    return false;
}

function checkPassportStrict(pass, reqFields) {
    if (pass.length >= 7) {
        let passMap = new Map();
        pass.forEach(p => {
            let split = p.split(':')
            passMap.set(split[0], split[1]);
        });

        if (!reqFields.every(x => passMap.get(x))) {
            return false;
        }

        let byr = passMap.get('byr');
        if (`${byr}`.length != 4 || parseInt(byr) < 1920 || parseInt(byr) > 2002) {
            return false;
        }

        let iyr = passMap.get('iyr');
        if (`${iyr}`.length != 4 || parseInt(iyr) < 2010 || parseInt(iyr) > 2020) {
            return false;
        }

        let eyr = passMap.get('eyr');
        if (`${eyr}`.length != 4 || parseInt(eyr) < 2020 || parseInt(eyr) > 2030) {
            return false;
        }

        let hgt = passMap.get('hgt');
        if (!['cm', 'in'].includes(hgt.slice(-2))) {
            return false;
        } else {
            let meas = hgt.slice(-2);
            let num = hgt.slice(0, -2);

            if (meas == 'cm') {
                if (num < 150 || num > 193) {
                    return false;
                }
            } else {
                if (num < 59 || num > 76) {
                    return false;
                }
            }
        }

        let hcl = passMap.get('hcl');
        let regHcl = new RegExp('^(#[a-f0-9]{6})', 'i')
        if (!hcl.match(regHcl)) {
            return false;
        }

        let ecl = passMap.get('ecl');
        const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        if (!validEcl.includes(ecl.toLowerCase())) {
            // console.log(ecl);
            return false;
        }

        let pid = passMap.get('pid');
        let regPid = new RegExp('^([0-9]{9})$')
        if (!pid.match(regPid)) {
            // console.log(pid)
            return false;
        }

        return true





        // let byr = passMap.get('byr');
        // if (`${byr}`.length == 4 && parseInt(byr) >= 1920 && parseInt(byr) <= 2002) {
        //     return true;
        // }

        // let iyr = passMap.get('iyr');
        // if (`${iyr}`.length == 4 && parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020) {
        //     return true;
        // }

        // let eyr = passMap.get('eyr');
        // if (`${eyr}`.length == 4 && parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030) {
        //     return true;
        // }

        // let hgt = passMap.get('hgt');
        // if (['cm', 'in'].includes(hgt.slice(-2))) {
        //     {
        //         let meas = hgt.slice(-2);
        //         let num = hgt.slice(0, -2);

        //         if (meas == 'cm') {
        //             if (num >= 150 && num <= 193) {
        //                 return true;
        //             }
        //         } else {
        //             if (num >= 59 && num <= 76) {
        //                 return true;
        //             }
        //         }
        //     }
        // } 

        // let hcl = passMap.get('hcl');
        // let regHcl = new RegExp('^(#[a-f0-9]{6})', 'i')
        // if (hcl.match(regHcl)) {
        //     return true;
        // }

        // let ecl = passMap.get('ecl');
        // const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        // if (validEcl.includes(ecl.toLowerCase())) {
        //     // console.log(ecl);
        //     return true;
        // }

        // let pid = passMap.get('pid');
        // let regPid = new RegExp('^([0-9]{9})')
        // if (pid.match(regPid)) {
        //     // console.log(pid)
        //     return true;
        // }

        // return false
    }
    return false;
}


// Answers
/*
    PART 1
    206 (First try)

    PART 2
    124 Too high
    123 

*/



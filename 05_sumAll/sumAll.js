
const sumAll = function(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    if (x > y) {
        for (let j = y; j <= x; j++) {
        sum += j;
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

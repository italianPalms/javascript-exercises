
const sumAll = function(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    if (x > y) {
        for (let j = y; j <= x; j++) {
        sum += j;
        }
    } else if ( x < 0 || y < 0) {
        return "ERROR";
    } else if (typeof x === "string" || typeof y === "string") {
        return "ERROR";
    } else if (Array.isArray(x) || Array.isArray(y)) {
        return "ERROR";
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

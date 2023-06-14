

const palindromes = function (string) {
    string = string.toLowerCase().replace(/\W/g, '');
    let len = string.length;
   
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len -1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

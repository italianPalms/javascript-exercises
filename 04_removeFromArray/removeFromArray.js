const removeFromArray = function(array1, ...args) {
    if (args == 3) {
        array1.splice(2, 1);
        return array1;
    }
}


// Do not edit below this line
module.exports = removeFromArray;

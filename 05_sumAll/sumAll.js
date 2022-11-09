const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if ( min < 0 || max < 0 ) return 'ERROR';
    if ( min > max) {
        const temp  = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;


//sum 0 + 1 + 2 + 3 + 4 
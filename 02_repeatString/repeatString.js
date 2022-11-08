const repeatString = (string, num) => {
    if (num < 0) return 'ERROR';
    let word = '';
    for (let i = 0; i < num; i++) {
        word += string
    }
    return word;
}

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;

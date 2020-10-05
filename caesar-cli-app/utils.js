const fs = require('fs');

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

const getCorrectShift = function (shift, action) {
    let shiftCount = parseInt(shift, 10);
    if (!shiftCount || typeof shiftCount !== 'number') {
        console.error(
            'Cryption process failed: Incorrect or absent shift value.'
        );
        process.exit(1);
    }
    if (action && action === 'decode') {
        shiftCount = -shiftCount;
    }
    while (shiftCount > alphabet.length) {
        shiftCount = shiftCount - alphabet.length;
    }
    while (shiftCount < -alphabet.length) {
        shiftCount = shiftCount + alphabet.length;
    }
    return shiftCount;
};

const isValidOutput = output => {
    if (!fs.existsSync(output)) {
        console.error(`Cryption process failed: ${output} does not exist`);
        process.exit(1);
    }
    return fs.promises
        .access(output, fs.constants.W_OK)
        .then(() => true)
        .catch(err => {
            console.error(`Cryption process failed: ${output} is read-only`);
            process.exit(1);
        });
};

const isValidInput = input => {
    if (!fs.existsSync(input)) {
        console.error(`Cryption process failed: ${input} does not exist`);
        process.exit(1);
    }
    return fs.promises
        .access(input, fs.constants.R_OK)
        .then(() => true)
        .catch(err => {
            console.error(`Cryption process failed: ${input} is not readable`);
            process.exit(1);
        });
};

module.exports = {
    alphabet,
    getCorrectShift,
    isValidInput,
    isValidOutput,
};

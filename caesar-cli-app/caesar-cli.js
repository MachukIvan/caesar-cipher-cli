const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { program } = require('commander');

const { CryptTransformer } = require('./transform');
const { getCorrectShift, isValidOutput, isValidInput } = require('./utils');

program
    .storeOptionsAsProperties(true)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <input>', 'an input file path')
    .option('-o, --output <output>', 'an output file path')
    .option('-a, --action <action>', 'an action encode/decode')
    .parse(process.argv);

const { shift, input, output, action } = program;

const shiftCount = getCorrectShift(shift, action);

const inputStream =
    input && isValidInput(input)
        ? fs.createReadStream(path.resolve(__dirname, input))
        : process.stdin;
const outputStream =
    output && isValidOutput(output)
        ? fs.createWriteStream(path.resolve(__dirname, output), {
              flags: 'a+',
          })
        : process.stdout;
const transformStream = new CryptTransformer(shiftCount);

pipeline(inputStream, transformStream, outputStream, error => {
    if (error) {
        console.error('Cryption process failed.', error.message);
        process.exit(1);
    } else {
        console.log('Cryption process succeeded.');
    }
});

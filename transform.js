const stream = require('stream');

class CryptTransformer extends stream.Transform {
    _transform(data, encoding, callback) {
        this.push(data);
        callback();
    }
}

const read = process.stdin;
const write = process.stdout;
const transform = new CryptTransformer();

read.pipe(transform).pipe(write);

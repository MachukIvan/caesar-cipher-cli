const stream = require('stream');
const { crypt } = require('./crypt');

class CryptTransformer extends stream.Transform {
    constructor(shift) {
        super();
        this.shift = shift;
    }

    _transform(data, _, callback) {
        this.push(crypt(data.toString(), this.shift));
        callback();
    }
}

module.exports = {
    CryptTransformer,
};

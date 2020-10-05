const { alphabet } = require('./utils');

const crypt = (text, shift) => {
    const givenArray = text.split('');
    const resultArray = givenArray.map(item => {
        if (alphabet.includes(item.toLowerCase())) {
            let index = alphabet.indexOf(item.toLowerCase()) + shift;
            if (index >= alphabet.length) {
                index = index - alphabet.length;
            } else if (index < 0) {
                index = alphabet.length + index;
            }
            if (item === item.toUpperCase()) {
                return alphabet[index].toUpperCase();
            } else {
                return alphabet[index];
            }
        } else {
            return item;
        }
    });
    return resultArray.join('') + '\n';
};

module.exports = {
    crypt,
};

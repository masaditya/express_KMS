const bcrypt = require('bcrypt');

const hashPassword = (password, rounds, callback) => {
    bcrypt.hash(password, rounds, (error, hash) => {
        callback(error, hash);
    });
};

const compare = (password, dbHash, callback) => {
    bcrypt.compare(password, dbHash, (error, match) => {
        if (match) {
            callback(null, true);
        } else {
            callback("Invalid", null);
        }
    });
};

module.exports = {
    hashPassword,
    compare
};
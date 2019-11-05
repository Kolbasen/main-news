'use strict'
const bcrypt = require('bcrypt')

const encryptePasswd = async password => {
    const hash = await bcrypt.hash(password, +process.env.SALT_ROUNDS)
    return hash;
}

const comparePasswd = async (password, hash) => {
    const result = await bcrypt.compare(password, hash)
    return result;
}

module.exports = {
    encryptePasswd,
    comparePasswd
}
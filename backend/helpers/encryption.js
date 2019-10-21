'use strict'
const bcrypt = require('bcrypt')
const { saltRounds } = require('../config/config')

const encryptePasswd = async password => {
    const hash = await bcrypt.hash(password, saltRounds)
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
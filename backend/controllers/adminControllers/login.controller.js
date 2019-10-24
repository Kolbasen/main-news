'use strict'

const jwt = require('jsonwebtoken')
const { getAdmin, saveAdmin } = require('../../services/admin/admin.service')
const { encryptePasswd, comparePasswd } = require('../../helpers/encryption')
const { secret } = require('../../config/config')

async function loginController(req, res) {
    const { username, password } = req.body;
    // console.log(token)
    console.log(username, password)
    try {
        //only for tests
        // const hash = await encryptePasswd(password)
        // const result = await saveAdmin(username, hash)
        // console.log(result)
        //only for tests
        const result = await getAdmin(username)
        console.log(result)
        if (result) {
            const compared = await comparePasswd(password, result.hash)
            console.log(compared)
            if (compared) {
                const token = await jwt.sign({ admin: true, id: result.id }, secret)
                res.status(200).json({token})
            } else {
                res.status(400).json({error: 'Wrong password'})
            }
        } else {
            res.status(400).json({error: 'No user found'})
        }
    } catch (error) {
        console.log('Login error')
    }
}

module.exports = loginController
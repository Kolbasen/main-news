'use strict'

const jwt = require('jsonwebtoken')
const { getAdmin, saveAdmin } = require('../../services/admin/admin.service')
const { encryptePasswd, comparePasswd } = require('../../helpers/encryption')

async function addAdmin(req, res) {
    const { username, password, key } = req.body;
    if (key === process.env.REGISTER_KEY) {
        try {
            const hash = await encryptePasswd(password)
            const result = await saveAdmin(username, hash)
            console.log(result)
            res.status(200).json(result)
        } catch (error){
            console.log(error)
            res.status(400).json({message: 'Invalid Data'})
        }
    } else {
        res.status(403).send({
            message: 'Invalid key'
        })
    }
}

module.exports = addAdmin
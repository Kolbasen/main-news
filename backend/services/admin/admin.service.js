const { Admin } = require('../../models/admin');

const getAdmin = async username => {
    try {
        const res = await Admin.findOne({where: {username: username}, raw: true})
        return res;
    } catch (error) {
        console.log('Getting admin error')
    }
}


// temporary for testing 
const saveAdmin = async (username, hash) => {
    try {
        const res = await Admin.create({
            username, 
            hash
        })
        return res
    } catch (error) {
        console.log('Saving admin error')
        console.log(error)
    }
}

module.exports = {
    getAdmin, 
    saveAdmin
}

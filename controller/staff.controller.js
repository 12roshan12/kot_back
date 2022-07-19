const { MInsertStaff } = require('../models/staff.model')

const CInsertStaff = async(req)=>{
    const result = await MInsertStaff(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}


module.exports = { CInsertStaff }
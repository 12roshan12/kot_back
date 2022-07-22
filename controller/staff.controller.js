const { MStaffInsert,MStaffUpdate,MStaffDelete,MStaffGet } = require('../models/staff.model')

const CStaffInsert = async(req)=>{
    const result = await MStaffInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CStaffUpdate = async (req, res, next) => {

    const result = await MStaffUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CStaffDelete = async (req, res, next) => {

    const result = await MStaffDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CStaffGet = async (req, res, next) => {

    const result = await MStaffGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

module.exports = { CStaffInsert,CStaffDelete,CStaffGet,CStaffUpdate }

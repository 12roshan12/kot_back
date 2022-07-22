const { MDineGroupInsert,MDineGroupUpdate,MDineGroupDelete,MDineGroupGet } = require('../models/dineGroup.model')

const CDineGroupInsert = async(req)=>{
    const result = await MDineGroupInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CDineGroupUpdate = async (req, res, next) => {

    const result = await MDineGroupUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CDineGroupDelete = async (req, res, next) => {

    const result = await MDineGroupDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CDineGroupGet = async (req, res, next) => {

    const result = await MDineGroupGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

module.exports = { CDineGroupInsert,CDineGroupDelete,CDineGroupGet,CDineGroupUpdate }

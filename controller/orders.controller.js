const { MOrderInsert,MOrderUpdate,MOrderDelete,MOrderGet } = require('../models/orders.model')



const COrderInsert = async(req)=>{
    const result = await MOrderInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const COrderUpdate = async (req, res, next) => {

    const result = await MOrderUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const COrderDelete = async (req, res, next) => {

    const result = await MOrderDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const COrderGet = async (req, res, next) => {

    const result = await MOrderGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

module.exports = { COrderInsert,COrderDelete,COrderGet,COrderUpdate }

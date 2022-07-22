const { MCustomerInsert,MCustomerUpdate,MCustomerDelete,MCustomerGet  } = require('../models/customer.model')

const CCustomerInsert = async (req) => {
    const result = await MCustomerInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CCustomerUpdate = async (req, res, next) => {

    const result = await MCustomerUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CCustomerDelete = async (req, res, next) => {

    const result = await MCustomerDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CCustomerGet = async (req, res, next) => {

    const result = await MCustomerGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

module.exports = { CCustomerInsert,CCustomerDelete,CCustomerGet,CCustomerUpdate }

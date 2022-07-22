const { MBillInsert,MBillUpdate,MBillDelete,MBillGet } = require('../models/bill.model')

const CBillInsert = async(req)=>{

    const result = await MBillInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CBillUpdate = async (req, res, next) => {

    const result = await MBillUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CBillDelete = async (req, res, next) => {

    const result = await MBillDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CBillGet = async (req, res, next) => {

    const result = await MBillGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

module.exports = { CBillInsert,CBillDelete,CBillGet,CBillUpdate }

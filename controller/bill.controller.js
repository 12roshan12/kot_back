const { MBillInsert } = require('../models/bill.model')



const CBillInsert = async(req)=>{

    const result = await MBillInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}


module.exports = { CBillInsert }
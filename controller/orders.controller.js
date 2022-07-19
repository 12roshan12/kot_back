const { MOrderInsert } = require('../models/orders.model')



const COrderInsert = async(req)=>{
    const result = await MOrderInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}


module.exports = { COrderInsert }
const { MAvailTableInsert } = require('../models/availTable.model')


const CAvailTableInsert = async(req)=>{
    const result = await MAvailTableInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}




module.exports = { CAvailTableInsert }
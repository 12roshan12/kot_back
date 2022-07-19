const { MDineGroupInsert } = require('../models/dineGroup.model')



const CDineGroupInsert = async(req)=>{
    const result = await MDineGroupInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}


module.exports = { CDineGroupInsert }
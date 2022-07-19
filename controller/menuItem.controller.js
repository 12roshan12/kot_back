const { MMenuItemInsert } = require('../models/menuItem.model')



const CMenuItemInsert = async(req)=>{
    const result = await MMenuItemInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}


module.exports = { CMenuItemInsert }
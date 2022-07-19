const { MTypeInsert } = require('../models/availType.model')

const CTypeInsert = async (req) => {
    const result = await MTypeInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

module.exports = { CTypeInsert }
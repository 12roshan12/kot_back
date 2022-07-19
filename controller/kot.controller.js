const { MInsertKot } = require('../models/kot.model')


const CInsertKot = async (req) => {
    const result = await MInsertKot(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

module.exports = { CInsertKot }
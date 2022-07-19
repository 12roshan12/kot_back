const { MHallInsert } = require('../models/hall.model')


const CHallInsert = async (req) => {
    const result = await MHallInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
  
}

module.exports = { CHallInsert }
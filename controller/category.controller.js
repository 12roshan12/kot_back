const { MCategoryInsert } = require('../models/category.model')


const CCategoryInsert = async (req) => {
    const result = await MCategoryInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
  
}

module.exports = { CCategoryInsert }
const { MCategoryInsert,MCategoryUpdate,MCategoryDelete,MCategoryGet } = require('../models/category.model')

const CCategoryInsert = async (req) => {
    const result = await MCategoryInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
  
}

const CCategoryUpdate = async (req, res, next) => {

    const result = await MCategoryUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CCategoryDelete = async (req, res, next) => {

    const result = await MCategoryDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CCategoryGet = async (req, res, next) => {

    const result = await MCategoryGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

module.exports = { CCategoryInsert,CCategoryDelete,CCategoryGet,CCategoryUpdate }

const { MHallInsert,MHallUpdate,MHallDelete,MHallGet } = require('../models/hall.model')

const CHallInsert = async (req) => {
    const result = await MHallInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
  
}

const CHallUpdate = async (req, res, next) => {

    const result = await MHallUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CHallDelete = async (req, res, next) => {

    const result = await MHallDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CHallGet = async (req, res, next) => {

    const result = await MHallGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

module.exports = { CHallInsert,CHallDelete,CHallGet,CHallUpdate }
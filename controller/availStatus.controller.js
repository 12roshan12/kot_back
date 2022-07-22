const { MAvailStatusInsert,MAvailStatusUpdate,MAvailStatusDelete,MAvailStatusGet } = require('../models/availStatus')

const CAvailStatusInsert = async (req, res, next) => {

    const result = await MAvailStatusInsert(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CAvailStatusUpdate = async (req, res, next) => {

    const result = await MAvailStatusUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CAvailStatusDelete = async (req, res, next) => {

    const result = await MAvailStatusDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CAvailStatusGet = async (req, res, next) => {

    const result = await MAvailStatusGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}


module.exports = { CAvailStatusInsert,CAvailStatusDelete,CAvailStatusGet,CAvailStatusUpdate }
const { MTypeInsert,MTypeUpdate,MTypeDelete,MTypeGet } = require('../models/availType.model')



const CTypeInsert = async (req) => {
    const result = await MTypeInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}
const CTypeUpdate = async (req, res, next) => {

    const result = await MTypeUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CTypeDelete = async (req, res, next) => {

    const result = await MTypeDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CTypeGet = async (req, res, next) => {

    const result = await MTypeGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}


module.exports = { CTypeInsert,CTypeDelete,CTypeGet,CTypeUpdate }



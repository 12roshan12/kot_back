const { MAvailTableInsert,MAvailTableUpdate,MAvailTableDelete,MAvailTableGet  } = require('../models/availTable.model')


const CAvailTableInsert = async(req)=>{
    const result = await MAvailTableInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}


const CAvailTableUpdate = async (req, res, next) => {

    const result = await MAvailTableUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CAvailTableDelete = async (req, res, next) => {

    const result = await MAvailTableDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CAvailTableGet = async (req, res, next) => {

    const result = await MAvailTableGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}


module.exports = { CAvailTableInsert,CAvailTableDelete,CAvailTableGet,CAvailTableUpdate }




const { MAvailStatusInsert } = require('../models/availStatus')

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


module.exports = { CAvailStatusInsert }
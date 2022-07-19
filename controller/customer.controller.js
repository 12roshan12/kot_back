const { MCustomerInsert } = require('../models/customer.model')


const CCustomerInsert = async (req) => {
    const result = await MCustomerInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
  
  
}

module.exports = { CCustomerInsert }
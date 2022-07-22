const { MMenuItemInsert,MMenuItemUpdate,MMenuItemDelete,MMenuItemGet } = require('../models/menuItem.model')

const CMenuItemInsert = async(req)=>{
    const result = await MMenuItemInsert(req.body)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }
}

const CMenuItemUpdate = async (req, res, next) => {

    const result = await MMenuItemUpdate(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CMenuItemDelete = async (req, res, next) => {

    const result = await MMenuItemDelete(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

const CMenuItemGet = async (req, res, next) => {

    const result = await MMenuItemGet(req.body)

    console.log(result)
    if (result.error == null) {
        res.send({ error:null ,data: result })
    }
    else {
        res.send({ error:result.err , data: null })
    }

}

module.exports = { CMenuItemInsert,CMenuItemDelete,CMenuItemGet,CMenuItemUpdate }
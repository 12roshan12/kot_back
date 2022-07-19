const { insertItemsModel,GetAllItemsModel } = require('../models/demo.model');


const insertItemsController = async (req,res) =>{
    // console.log(req.body)
    const result = await insertItemsModel(req.body)
    console.log(result , "Printed Form Controller")
    res.send({data:result})

}

const GetAllItemsController = async (req,res) =>{
    console.log(req.body)
    const result = await GetAllItemsModel()
    console.log(result , "Printed Form Controller")
    res.send({data:result})

}


module.exports = { insertItemsController,GetAllItemsController }
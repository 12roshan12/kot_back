const db = require('../db/db');

const MCategoryInsert = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO category (category_id,category_name,active_status) VALUES (?,?)";
        db.query(sql,[req.category_id,req.category_name,req.active_status], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
                console.log("1 Items Inserted");
            }
        })

    })
  
}

const MCategoryUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE category SET category_id=?,category_name=?,active_status=? where id = ? ";
        db.query(sql,[req.category_id,req.category_name,req.active_status,req.id], function (err,result) {  
            if(err)
            {
                resolve({error: err,result:null});
            }
            else{
                resolve({error:null,result:result});
            }
        })

    })
}

const MCategoryGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  category";
        db.query(sql, function (err,result) {  
            if(err)
            {
                resolve({error: err,result:null});
            }
            else{
                resolve({error:null,result:result});
            }
        })

    })
}

const MCategoryDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  category WHERE id=?";
        db.query(sql,[req.id], function (err,result) {  
            if(err)
            {
                resolve({error: err,result:null});
            }
            else{
                resolve({error:null,result:result});
            }
        })

    })
}

module.exports = { MCategoryInsert,MCategoryDelete,MCategoryGet,MCategoryUpdate }
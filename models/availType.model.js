const db = require('../db/db');

const MTypeInsert = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO avail_type (name,type_relation) VALUES (?,?)";
        db.query(sql,[req.name,req.type_relation], function (err, result) {
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

const MTypeUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE avail_type SET name=?,type_relation=?  where id = ? ";
        db.query(sql,[req.name,req.type_relation,req.id], function (err,result) {  
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

const MTypeGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  avail_type";
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

const MTypeDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  avail_type WHERE id=?";
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

module.exports = { MTypeInsert,MTypeDelete,MTypeGet,MTypeUpdate }
const db = require('../db/db')


const MAvailStatusInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO avail_status (name,status_relation) VALUES (?,?)";
        db.query(sql,[req.name,req.status_relation], function (err,result) {  
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

const MAvailStatusUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE avail_status SET name=?,status_relation=?  where id = ? ";
        db.query(sql,[req.name,req.status_relation,req.id], function (err,result) {  
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

const MAvailStatusGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  avail_status";
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

const MAvailStatusDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  avail_status WHERE id=?";
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

module.exports = { MAvailStatusInsert,MAvailStatusUpdate,MAvailStatusGet,MAvailStatusDelete }
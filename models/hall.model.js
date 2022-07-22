const db = require('../db/db');

const MHallInsert = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO hall (hall_id,hall_name,active_status) VALUES (?,?,?)";
        db.query(sql,[req.hall_id,req.hall_name,req.active_status], function (err, result) {
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
const MHallUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE hall SET hall_id=?,hall_name=?,active_status=?  where id = ? ";
        db.query(sql,[req.hall_id,req.hall_name,req.active_status,req.id], function (err,result) {  
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

const MHallGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  hall";
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

const MHallDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  hall WHERE id=?";
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

module.exports = { MHallInsert,MHallDelete,MHallGet,MHallUpdate }
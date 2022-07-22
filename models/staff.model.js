
const db = require('../db/db');

const MStaffInsert = async(req)=>{
    return new Promise((resolve, reject) =>{
        var sql = "INSERT INTO staff (staff_id,name,address,phone_number,position,isadmin,issuperuser,user_type,active_status,created_by,created_on,updated_by,updated_by,updated_on) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        db.query(sql,[req.staff_id,req.name,req.address,req.phone_number,req.position,req.isadmin,req.issuperuser,req.user_type,req.active_status,req.created_by,req.created_on,req.updated_by,req.updated_by,req.updated_on], function(err, result){
            
            if(err){
                resolve({error: err, result: null});
            }
            else{
                resolve({ error: null , result: result})
            }
        })
    })
}

const MStaffUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE staff SET staff_id=?,name=?,address=?,phone_number=?,position=?,isadmin=?,issuperuser=?,user_type=?,active_status=?,created_by=?,created_on=?,updated_by=?,updated_by=?,updated_on=?  where id = ? ";
        db.query(sql,[req.staff_id,req.name,req.address,req.phone_number,req.position,req.isadmin,req.issuperuser,req.user_type,req.active_status,req.created_by,req.created_on,req.updated_by,req.updated_by,req.updated_on,req.id], function (err,result) {  
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

const MStaffGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  staff";
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

const MStaffDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  staff WHERE id=?";
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


module.exports = { MStaffInsert,MStaffDelete,MStaffGet,MStaffUpdate }
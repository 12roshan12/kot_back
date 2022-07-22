const db = require('../db/db')


const MDineGroupInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO dine_group (order_id,group_created_on,group_closed_on,dine_group_status) VALUES (?,?,?,?)";
        db.query(sql,[req.order_id,req.group_created_on,req.group_closed_on,req.dine_group_status], function (err,result) {  
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

const MDineGroupUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE dine_group SET order_id=?,group_created_on=?,group_closed_on=?,dine_group_status=?  where id = ? ";
        db.query(sql,[req.order_id,req.group_created_on,req.group_closed_on,req.dine_group_status,req.id], function (err,result) {  
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

const MDineGroupGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  dine_group";
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

const MDineGroupDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  dine_group WHERE id=?";
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


module.exports = { MDineGroupInsert,MDineGroupUpdate,MDineGroupDelete,MDineGroupGet }
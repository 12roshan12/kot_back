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


module.exports = { MDineGroupInsert }
const db = require('../db/db')


const MAvailTableInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO avail_table (table_id,total_pax_capacity,hall_id,current_pax_no,table_status,active_status) VALUES (?,?,?,?,?,?)";
        db.query(sql,[req.table_id,req.total_pax_capacity,req.hall_id,req.current_pax_no,req.table_status,req.active_status], function (err,result) {  
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


module.exports = { MAvailTableInsert }
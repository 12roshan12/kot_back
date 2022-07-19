const db = require('../db/db');

const MInsertKot = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO kot (kot_id,table_id,kot_status_id,kot_type_id,order_id,created_on,created_by) VALUES (?,?,?,?,?,?,?)";
        db.query(sql,[req.kot_id,req.table_id,req.kot_status_id,req.kot_type_id,req.order_id,req.created_on,req.created_by], function (err, result) {
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

module.exports = { MInsertKot }
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

module.exports = { MHallInsert }
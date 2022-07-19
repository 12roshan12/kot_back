const db = require('../db/db');

const MCategoryInsert = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO avail_type (category_id,category_name,active_status) VALUES (?,?)";
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

module.exports = { MCategoryInsert }
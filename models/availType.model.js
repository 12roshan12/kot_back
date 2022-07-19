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

module.exports = { MTypeInsert }
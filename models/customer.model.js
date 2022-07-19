const db = require('../db/db');

const MCustomerInsert = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO customer (customer_id,name,address,req.phone,req.email) VALUES (?,?)";
        db.query(sql,[req.customer_id,req.name,req.address,req.phone,req.email], function (err, result) {
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

module.exports = { MCustomerInsert }
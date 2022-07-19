const db = require('../db/db');

const insertItemsModel = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO items (name,quantity) VALUES (?,?)";
        db.query(sql,[req.name,req.quantity], function (err, result) {
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

const GetAllItemsModel = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM items";
        db.query(sql, function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
                console.log("1 Items Fetched");
            }
        })

    })
  
}


module.exports = { insertItemsModel,GetAllItemsModel }
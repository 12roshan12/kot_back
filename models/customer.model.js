const db = require('../db/db');

const MCustomerInsert = async (req) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO customer (customer_id,name,address,phone,email) VALUES (?,?)";
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

const MCustomerUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE customer SET customer_id=?,name=?,address=?,phone=?,email=?  where id = ? ";
        db.query(sql,[req.customer_id,req.name,req.address,req.phone,req.email,req.id], function (err,result) {  
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

const MCustomerGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  customer";
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

const MCustomerDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  customer WHERE id=?";
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

module.exports = { MCustomerInsert,MCustomerDelete,MCustomerGet,MCustomerUpdate }
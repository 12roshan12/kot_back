const db = require('../db/db')


const MOrderInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO orders (table_id,items_id,customer_id,staff_id,quantity,placed_on,prepared_on) VALUES (?,?,?,?,?,?,?,?)";
        db.query(sql,[req.table_id,req.items_id,req.customer_id,req.staff_id,req.quantity,req.placed_on,req.prepared_on], function (err,result) {  
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

const MOrderUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE orders SET table_id=?,items_id=?,customer_id=?,staff_id=?,quantity=?,placed_on=?,prepared_on=?  where id = ? ";
        db.query(sql,[req.table_id,req.items_id,req.customer_id,req.staff_id,req.quantity,req.placed_on,req.prepared_on,req.id], function (err,result) {  
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

const MOrderGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  orders";
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

const MOrderDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  orders WHERE id=?";
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


module.exports = { MOrderInsert,MOrderDelete,MOrderGet,MOrderUpdate }
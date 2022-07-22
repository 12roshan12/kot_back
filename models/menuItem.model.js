const db = require('../db/db')


const MMenuItemInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO menu_items (item_category,item_id,item_name,isbeverage,beverage_item_id,price,active_status,created_by,created_on,updated_by,updated_on) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        db.query(sql,[req.item_category,req.item_id,req.item_name,req.isbeverage,req.beverage_item_id,req.price,req.active_status,req.created_by,req.created_on,req.updated_by,req.updated_on], function (err,result) {  
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

const MMenuItemUpdate = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "UPDATE menu_items SET item_category=?,item_id=?,item_name=?,isbeverage=?,beverage_item_id=?,price=?,active_status=?,created_by=?,created_on=?,updated_by=?,updated_on=?  where id = ? ";
        db.query(sql,[req.item_category,req.item_id,req.item_name,req.isbeverage,req.beverage_item_id,req.price,req.active_status,req.created_by,req.created_on,req.updated_by,req.updated_on,req.id], function (err,result) {  
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

const MMenuItemGet = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM  menu_items";
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

const MMenuItemDelete = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM  menu_items WHERE id=?";
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


module.exports = { MMenuItemInsert,MMenuItemDelete,MMenuItemGet,MMenuItemUpdate }
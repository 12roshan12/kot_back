const db = require('../db/db')


const MAvailStatusInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO avail_status (name,status_relation) VALUES (?,?)";
        db.query(sql,[req.name,req.status_relation], function (err,result) {  
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


module.exports = { MAvailStatusInsert }
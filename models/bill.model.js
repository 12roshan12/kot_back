const db = require('../db/db')


const MBillInsert = async(req)=>{

    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO bill (bill_no,dine_group_id,generated_by,generated_on,bill_discount,service_tax,service_charge,promo_code,grand_total,payment_status,payment_date,payment_received_by) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        db.query(sql,[req.bill_no,req.dine_group_id,req.generated_by,req.generated_on,req.bill_discount,req.service_tax,req.service_charge,req.promo_code,req.grand_total,req.payment_status,req.payment_date,req.payment_received_by], function (err,result) {  
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


module.exports = { MBillInsert }
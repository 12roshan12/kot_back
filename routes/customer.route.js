const express = require('express');
const router  = express.Router();
const { CCustomerInsert,CCustomerDelete,CCustomerGet,CCustomerUpdate } = require('../controller/customer.controller');

router.post('/add', CCustomerInsert);
router.put('/put', CCustomerUpdate);
router.get('/get', CCustomerGet);
router.delete('/delete', CCustomerDelete);

module.exports = router;
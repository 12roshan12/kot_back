const express = require('express');
const router  = express.Router();
const { CCustomerInsert } = require('../controller/customer.controller');

router.post('/add', CCustomerInsert);

module.exports = router;
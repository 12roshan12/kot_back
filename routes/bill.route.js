const express = require('express');
const router  = express.Router();
const { CBillInsert } = require('../controller/bill.controller');

router.post('/add', CBillInsert);

module.exports = router;
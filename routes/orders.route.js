const express = require('express');
const router  = express.Router();
const { COrderInsert } = require('../controller/orders.controller');

router.post('/add', COrderInsert);

module.exports = router;
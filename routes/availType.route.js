const express = require('express');
const router  = express.Router();
const { CTypeInsert } = require('../controller/availType.controller');

router.post('/add', CTypeInsert);

module.exports = router;
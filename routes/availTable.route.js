const express = require('express');
const router  = express.Router();
const { CAvailTableInsert } = require('../controller/availTable.controller');

router.post('/add', CAvailTableInsert);

module.exports = router;
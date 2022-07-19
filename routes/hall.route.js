const express = require('express');
const router  = express.Router();
const { CHallInsert } = require('../controller/hall.controller');

router.post('/add', CHallInsert);

module.exports = router;
const express = require('express');
const router  = express.Router();
const { CDineGroupInsert } = require('../controller/dineGroup.controller');

router.post('/add', CDineGroupInsert);

module.exports = router;
const express = require('express');
const router  = express.Router();
const { CAvailStatusInsert } = require('../controller/availStatus.controller');

router.post('/add', CAvailStatusInsert);

module.exports = router;
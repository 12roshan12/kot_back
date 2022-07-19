const express = require('express');
const router  = express.Router();
const { CInsertKot } = require('../controller/kot.controller');

router.post('/add', CInsertKot);

module.exports = router;
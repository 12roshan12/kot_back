const express = require('express');
const router  = express.Router();
const { CCategoryInsert } = require('../controller/category.controller');

router.post('/add', CCategoryInsert);

module.exports = router;
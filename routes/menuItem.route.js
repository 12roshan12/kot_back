const express = require('express');
const router  = express.Router();
const { CMenuItemInsert } = require('../controller/menuItem.controller');

router.post('/add', CMenuItemInsert);

module.exports = router;
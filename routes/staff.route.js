const express = require('express');
const router  = express.Router();
const { CInsertStaff } = require('../controller/staff.controller');

router.post('/add', CInsertStaff);

module.exports = router;
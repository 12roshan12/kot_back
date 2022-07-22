const express = require('express');
const router  = express.Router();
const { CStaffInsert,CStaffDelete,CStaffGet,CStaffUpdate } = require('../controller/staff.controller');

router.post('/add', CStaffInsert);
router.put('/put', CStaffUpdate);
router.get('/get', CStaffGet);
router.delete('/delete', CStaffDelete);

module.exports = router;
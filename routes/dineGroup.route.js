const express = require('express');
const router  = express.Router();
const { CDineGroupInsert,CDineGroupDelete,CDineGroupGet,CDineGroupUpdate } = require('../controller/dineGroup.controller');

router.post('/add', CDineGroupInsert);
router.put('/put', CDineGroupUpdate);
router.get('/get', CDineGroupGet);
router.delete('/delete', CDineGroupDelete);

module.exports = router;
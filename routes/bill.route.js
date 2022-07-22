const express = require('express');
const router  = express.Router();
const { CBillInsert,CBillDelete,CBillGet,CBillUpdate  } = require('../controller/bill.controller');

router.post('/add', CBillInsert);
router.put('/put', CBillUpdate);
router.get('/get', CBillGet);
router.delete('/delete', CBillDelete);

module.exports = router;
const express = require('express');
const router  = express.Router();
const { COrderInsert,COrderDelete,COrderGet,COrderUpdate } = require('../controller/orders.controller');

router.post('/add', COrderInsert);
router.put('/put', COrderUpdate);
router.get('/get', COrderGet);
router.delete('/delete', COrderDelete);

module.exports = router;
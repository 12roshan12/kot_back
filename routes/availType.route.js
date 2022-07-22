const express = require('express');
const router  = express.Router();
const { CTypeInsert,CTypeDelete,CTypeGet,CTypeUpdate  } = require('../controller/availType.controller');

router.post('/add', CTypeInsert);
router.put('/put', CTypeUpdate);
router.get('/get', CTypeGet);
router.delete('/delete', CTypeDelete);

module.exports = router;
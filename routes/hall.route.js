const express = require('express');
const router  = express.Router();
const { CHallInsert,CHallDelete,CHallGet,CHallUpdate  } = require('../controller/hall.controller');

router.post('/add', CHallInsert);
router.put('/put', CHallUpdate);
router.get('/get', CHallGet);
router.delete('/delete', CHallDelete);

module.exports = router;
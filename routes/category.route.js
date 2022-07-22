const express = require('express');
const router  = express.Router();
const { CCategoryInsert } = require('../controller/category.controller');

router.post('/add', CCategoryInsert);

const { CAvailTableInsert,CAvailTableDelete,CAvailTableGet,CAvailTableUpdate  } = require('../controller/availTable.controller');

router.post('/add', CAvailTableInsert);
router.put('/put', CAvailTableUpdate);
router.get('/get', CAvailTableGet);
router.delete('/delete', CAvailTableDelete);

module.exports = router;
const express = require('express');
const router  = express.Router();
const { CAvailStatusInsert,CAvailStatusDelete,CAvailStatusGet,CAvailStatusUpdate } = require('../controller/availStatus.controller');

router.post('/add', CAvailStatusInsert);
router.put('/put', CAvailStatusUpdate);
router.get('/get', CAvailStatusGet);
router.delete('/delete', CAvailStatusDelete);

module.exports = router;
const express = require('express');
const router  = express.Router();
const { insertItemsController,GetAllItemsController } = require('../controller/demo.controller');

router.post('/additems', insertItemsController);
router.get('/getAllitems', GetAllItemsController);

module.exports = router;
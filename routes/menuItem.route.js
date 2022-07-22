const express = require('express');
const router  = express.Router();
const { CMenuItemInsert,CMenuItemDelete,CMenuItemGet,CMenuItemUpdate } = require('../controller/menuItem.controller');

router.post('/add', CMenuItemInsert);
router.put('/put', CMenuItemUpdate);
router.get('/get', CMenuItemGet);
router.delete('/delete', CMenuItemDelete);

module.exports = router;
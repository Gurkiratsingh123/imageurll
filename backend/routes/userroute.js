const express = require('express');

const userctrl = require('../controller/usecontroller');

const storage = require('../helper/storage');

const router = express.Router();

router.get('/', userctrl.getURL);

router.post('/', storage, userctrl.postURL);

module.exports = router;
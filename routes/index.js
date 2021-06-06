const express = require('express');
const router = express.Router();

const users = require('./members');

router.use('/members', users);

module.exports = router;

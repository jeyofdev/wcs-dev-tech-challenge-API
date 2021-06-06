const express = require('express');
const router = express.Router();
const connection = require('../config/connection');

router.get('/', (req, res) => {
    res.status(200).send('list of members');
});

module.exports = router;

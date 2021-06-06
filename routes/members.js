const express = require('express');
const router = express.Router();
const connection = require('../config/connection');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM member', (err, results) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(results);
        }
    });
});

router.post('/', (req, res) => {
    connection.query('INSERT INTO member SET ?', req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            return connection.query(
                'SELECT * FROM member WHERE id = ?',
                results.insertId,
                (err2, records) => {
                    if (err2) {
                        return res.status(500).json(err2);
                    }

                    res.status(200).json(records);
                }
            );
        }
    });
});

module.exports = router;

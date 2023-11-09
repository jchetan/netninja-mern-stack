const express = require('express');

const router = express.Router();

router.get(
    '/',
    (req, res) => {
        res.json({msg: 'Get all workouts'});
    }
);

router.get(
    '/:id',
    (req, res) => {
        res.json({msg: 'Get one workout'});
    }
);

module.exports = router;
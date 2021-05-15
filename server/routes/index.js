const express = require('express');
const googleAPI = require('./googleAPI');
const sensorAPI = require('./sensorAPI');
const sessionAPI = require('./sessionAPI');

const router = new express.Router();

router.use('/places', googleAPI);
router.use('/sensors', sensorAPI);
router.use('/session', sessionAPI);

module.exports = router;

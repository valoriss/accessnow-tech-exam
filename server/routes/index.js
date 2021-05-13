const express = require('express');
const endpoint = require('./endpoint');

const router = new express.Router();

router.use('/endpoint', endpoint);

module.exports = router;

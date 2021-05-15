const express = require('express');
const { Accelerometer, Orientation } = require('../db');

const router = new express.Router();

router.post('/accelerometer', (req) => {
  console.log('UPDATING ACCELEROMETER DATA', req.body);

  const {
    x,
    y,
    z,
    userId,
  } = req.body;

  // Create database record for user with x/y/z coordinates
  Accelerometer.create({
    user_id: userId,
    x,
    y,
    z,
    createdAt: new Date(),
  });
});

router.post('/orientation', (req) => {
  console.log('UPDATING ORIENTATION DATA', req.body);

  const {
    userId,
    absolute,
    gamma,
    alpha,
    beta,
  } = req.body;

  // Create new log for orientation
  Orientation.create({
    user_id: userId,
    absolute,
    gamma,
    alpha,
    beta,
    createdAt: new Date(),
  });
});

module.exports = router;

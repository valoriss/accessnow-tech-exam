/* All sensor API calls to update/create/get/ will be received here */

const express = require('express');
const { Accelerometer, Orientation } = require('../db');

const router = new express.Router();

router.post('/accelerometer', async (req) => {
  console.log('UPDATING ACCELEROMETER DATA', req.body);

  const {
    x,
    y,
    z,
    userId,
  } = req.body;

  // Create database record for user with x/y/z coordinates
  try {
    await Accelerometer.create({
      user_id: userId,
      x,
      y,
      z,
      created_at: new Date(),
    });
  } catch (e) {
    console.log('Unable to create accelerometer reading for user:', userId, e);
  }
});

router.post('/orientation', async (req) => {
  console.log('UPDATING ORIENTATION DATA', req.body);

  const {
    userId,
    absolute,
    gamma,
    alpha,
    beta,
  } = req.body;

  // Create new log for orientation
  try {
    await Orientation.create({
      user_id: userId,
      absolute,
      gamma,
      alpha,
      beta,
      created_at: new Date(),
    });
  } catch (e) {
    console.log('Unable to create orientation reading for user:', userId, e);
  }
});

module.exports = router;

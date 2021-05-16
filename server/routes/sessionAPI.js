/* All session related API calls will be received here */

const express = require('express');
const { UserSession } = require('../db');

const router = new express.Router();

router.post('/', async (req) => {
  console.log('CREATING USER SESSION LOG', req.body);

  const {
    userId,
    sessionStart,
    sessionEnd,
    sessionLength,
  } = req.body;

  try {
    await UserSession.create({
      user_id: userId,
      session_start: sessionStart,
      session_end: sessionEnd,
      session_lengh: sessionLength,
      created_at: new Date(),
    });
  } catch (e) {
    console.log('unable to create user session log', userId, e);
  }
});

module.exports = router;

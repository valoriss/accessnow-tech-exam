const express = require('express');
const { UserSession } = require('../db');

const router = new express.Router();

router.post('/', (req) => {
  console.log('CREATING USER SESSION LOG', req.body);

  const {
    userId,
    sessionStart,
    sessionEnd,
    sessionLength,
  } = req.body;

  UserSession.create({
    user_id: userId,
    sessionStart,
    sessionEnd,
    sessionLength,
    createdAt: new Date(),
  });
});

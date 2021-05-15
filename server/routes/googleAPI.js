const express = require('express');
const request = require('superagent');

const key = require('../secrets');

const router = new express.Router();

router.get('/', async (req, res) => {
  console.log('GETTING PLACES SUGGESTION VIA GOOGLE API');

  if (!req) {
    res.status(400).send('invalid input');

    return;
  }

  const baseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  const url = `${baseUrl}?input=${req.query.input}&key=${key}`;

  let response;

  try {
    response = await request.get(url);
  } catch (e) {
    res.status(400).send({ body: [] });
  }

  if (response && response.body.predictions) {
    const { predictions } = response.body;
    let sliceAt = 7;

    if (predictions.length < 7) sliceAt = predictions.length;

    const mappedPredictions = predictions.slice(0, sliceAt).map(({ description }) => description);

    res.status(200).send(mappedPredictions);

    return;
  }

  res.status(400).send({ body: [] });
});

module.exports = router;

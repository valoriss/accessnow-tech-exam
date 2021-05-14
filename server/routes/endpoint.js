const express = require('express');
const request = require('superagent');

const router = new express.Router();

router.get('/', async (req, res) => {
  if (!req) {
    res.status(400).send('invalid input');

    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.input}&key=AIzaSyDagu9gRiefgPSFYQTCCRXRKjutQ3irzKI`;
  const response = await request.get(url);

  // console.log(response.body.predictions);
  if (response && response.body.predictions) {
    const { predictions } = response.body;
    let sliceAt = 7;

    if (predictions.length < 7) {
      sliceAt = predictions.length;
    }

    res.status(200).send({ body: predictions.slice(0, sliceAt) });

    return;
  }

  res.status(200).send({ body: 'hello world' });
});

module.exports = router;

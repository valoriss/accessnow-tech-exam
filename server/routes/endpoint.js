const express = require('express');
const request = require('superagent');

const router = new express.Router();

router.get('/', async (req, res) => {
  if (!req) {
    res.status(400).send('invalid input');

    return;
  }

  // TODO move key to secrets after MVP completion
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.input}&key=AIzaSyDagu9gRiefgPSFYQTCCRXRKjutQ3irzKI`;
  const response = await request.get(url);

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

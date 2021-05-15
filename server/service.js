const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { init } = require('./db');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use('/api/latest', cors(), routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

init();

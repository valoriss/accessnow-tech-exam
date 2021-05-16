const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { init } = require('./db');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

/* cors middleware is required to allow front-end
to communicate with back-end in development builds */
app.use('/api/latest', cors(), routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/* Initialize database connection */
init();

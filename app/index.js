// Initial imports
const express = require('express');
const debug = require('debug')('app');
const setup = require('../config/setup');

const rootRouter = require('./routes/root');

// App definition
const app = express();

// Settings
setup(app);

// Routes
app.use('/', rootRouter);

const server = app.listen(process.env.PORT || 3000, () => {
  debug(`Listening on http://localhost:${server.address().port}`);
});

// Initial imports
const express = require('express');
const setup = require('../config/setup');

const rootRouter = require('./routes/root');

// App definition
const app = express();

// Settings
setup(app);

// Routes
app.use('/', rootRouter);

module.exports = app;


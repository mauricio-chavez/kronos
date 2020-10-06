const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

module.exports = function (app) {
  // Environment variables
  dotenv.config();

  // Cors
  app.use(cors());

  // Logger
  app.use(morgan('dev'));
};

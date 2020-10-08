module.exports = function (app) {
  const cors = require('cors');
  const morgan = require('morgan');
  const dotenv = require('dotenv');
  // Environment variables
  dotenv.config();

  // Cors
  app.use(cors());

  // Logger
  app.use(morgan('dev'));
};

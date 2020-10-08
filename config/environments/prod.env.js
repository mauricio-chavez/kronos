module.exports = function (app) {
  const cors = require('cors');
  const morgan = require('morgan');

  // Cors
  app.use(cors());

  // Logger
  app.use(morgan('common'));
};

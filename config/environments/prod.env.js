const cors = require('cors');
const morgan = require('morgan');

module.exports = function (app) {
  // Cors
  app.use(cors());

  // Logger
  app.use(morgan('common'));
};

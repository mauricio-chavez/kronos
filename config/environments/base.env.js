const bodyParser = require('body-parser');
const helmet = require('helmet');

module.exports = function (app) {
  // Body Parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Helmet
  app.use(helmet());
};

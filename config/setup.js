const { log } = require('debug');
const base = require('./environments/base.env');
const dev = require('./environments/dev.env');
const prod = require('./environments/prod.env');

function setup(app) {
  base(app);
  switch (app.get('env')) {
    case 'production':
      prod(app);
      break;
    case 'development':
      dev(app);
      break;
  }
}

module.exports = setup;

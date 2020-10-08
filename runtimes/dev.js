const app = require('../app');
const debug = require('debug')('app');

const server = app.listen(process.env.PORT || 3000, () => {
  debug(`Listening on http://localhost:${server.address().port}`);
});

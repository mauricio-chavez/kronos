const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  console.log('I did it!');
  res.json({ success: true });
});

module.exports = router;

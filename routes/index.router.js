const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const user = req.session;
  res.render('index', { user });
});

module.exports = router;

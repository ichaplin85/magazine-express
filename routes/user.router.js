const express = require('express');

const router = express.Router();
const sha256 = require('sha256');
const { Lot, User, Rates } = require('../db/models');

router.get('/:user', (req, res) => {
  // const { user } = req.params;
  const { userName } = req.session;
  // console.log('user-get ->', user, userName);
  res.render('user', {userName});
});

module.exports = router;

const express = require('express');

const router = express.Router();
const sha256 = require('sha256');
const { Lot, User, Rates } = require('../db/models');

router.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    res.clearCookie('cookieName');
    return res.redirect('/');
  });
});

module.exports = router;

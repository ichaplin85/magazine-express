const express = require('express');

const router = express.Router();

const sha256 = require('sha256');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  const { email, name } = req.body;
  const password = sha256(req.body.password);

  try {
    const newUser = await User.create({ name, email, password });
    req.session.userId = newUser.id;
    req.session.userEmail = newUser.email;
    req.session.userName = newUser.name;
    res.sendStatus(200);
  } catch (err) {
    console.log('Register error', err);
    res.sendStatus(401);
  }
  // res.end();
});

module.exports = router;

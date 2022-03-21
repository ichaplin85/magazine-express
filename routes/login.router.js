const express = require('express');

const router = express.Router();
const { Lot, User, Rates } = require('../db/models');
const sha256 = require('sha256');

router.get('/', (req, res) => {

  res.render('login');
});

router.post('/', async (req,res)=> {
  const { email } = req.body;
  const password = sha256(req.body.password);
  let checkUser;
  try {
    checkUser = await User.findOne({
      where: {
        email,
        password,
      },
    });
  } catch (err) {
    console.log('errrerer check user', err);
  }
  console.log('login-router-checkuser---->', checkUser);
  if (checkUser.id) {
    req.session.userId = checkUser.id;
    req.session.userEmail = checkUser.email;
    req.session.userName = checkUser.name;
    console.log(req.session);
    res.sendStatus(200);
  } else {
    res.status(401);
  }
});
module.exports = router;

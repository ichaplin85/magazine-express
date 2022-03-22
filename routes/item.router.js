const express = require('express');

const router = express.Router();

const { Lot, User, Rates } = require('../db/models');

router.route('/')
  .get((req, res) => {
    const user = req.session;
    console.log(user);
    res.render('item', { user });
  })
  .post(async (req, res) => {
    const { userId } = req.session;
    const { userName } = req.session;
    const { text, date, post } = req.body;
    try {
      await Lot.create({
        name: text, dateStart: date, dateEnd: post, userId,
      });
    } catch (err) {
      console.log('item-err', err);
    }
    // res.end();
    res.redirect(`/user/${userName}`);
  });

module.exports = router;

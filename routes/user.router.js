const express = require('express');

const router = express.Router();
const sha256 = require('sha256');
const { Lot, User, Rates } = require('../db/models');

router.route('/:user')
  .get(async (req, res) => {
  // const { user } = req.params;
    const { userName, userId } = req.session;
    // console.log('user-get ->', user, userName);
    let data;
    try {
      data = await Lot.findAll({
        where: {
          userId,
        },
      });
    } catch (err) {
      console.log('login-err', err);
    }
    // console.log(data);
    res.render('user', { userName, data });
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    try {
      await Lot.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.log('delete-lot', err);
      res.sendStatus(500);
    }
  });

module.exports = router;

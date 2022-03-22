const express = require('express');

const router = express.Router();
const { Lot } = require('../db/models');

router.post('/:userName/:id', async (req, res) => {
  const { userName, id } = req.params;
  const { name, dateStart, dateEnd } = req.body;
  await Lot.update({ name, dateStart, dateEnd }, { where: { id } });
  res.redirect(`/user/${userName}`);
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { userName, userId } = req.session;
  let dataPost;
  try {
    dataPost = await Lot.findAll({
      where: {
        id,
      },
    });
  } catch (err) {
    console.log('login-err', err);
  }
  console.log(dataPost);
  res.render('change', {
    userName,
    dataPost: dataPost[0],
    userId,
    id,
  });
});

module.exports = router;

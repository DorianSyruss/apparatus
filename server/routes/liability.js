const router = require('express').Router();
const { Liability } = require('../db');

function check(req, res) {
  res.send('It works!!');
}

router.get('/liability', check);

module.exports = router;

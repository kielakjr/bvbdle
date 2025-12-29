const express = require('express');
const router = express.Router();

const playersData = require('../data/players.json');

router.get('/players', (req, res) => {
  res.send(playersData);
});

module.exports = router;

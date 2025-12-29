const express = require('express');
const router = express.Router();

const matchesData = require('../data/database.json');

router.get('/matches', (req, res) => {
  res.send(matchesData);
});

router.get('/matches/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * matchesData.length);
  res.send(matchesData[randomIndex]);
});

module.exports = router;

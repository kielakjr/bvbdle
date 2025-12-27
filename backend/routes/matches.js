const express = require('express');
const router = express.Router();

// Sample route for matches
router.get('/', (req, res) => {
  res.send('Matches route');
});

module.exports = router;

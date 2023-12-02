const express = require('express');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.get('/me', validateJWT, (req, res) => {
  const { user } = req;
  res.status(200).json(user);
});

module.exports = router;
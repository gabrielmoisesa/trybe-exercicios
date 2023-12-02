const express = require('express');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.get('/', validateJWT, (req, res) => {
  const { user } = req;

  if (user.admin) return res.status(200).json({ message: 'Peter Parker é o Homem-Aranha' });

  return res.status(403).json({ error: { message: 'Restricted access' } });
});

module.exports = router;
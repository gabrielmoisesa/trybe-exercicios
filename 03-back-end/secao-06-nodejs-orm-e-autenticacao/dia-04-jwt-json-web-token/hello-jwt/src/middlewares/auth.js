const jwt = require('jsonwebtoken');
const mockedDB = require('../models/mockedDB');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const validateJWT = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) return res.status(401).json({ error: { message: '"Token not found"' } });

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const foundUser = mockedDB.find((u) => u.id === decoded.data.id);
    if (!foundUser) return res.status(401).json({ message: 'Token inválido' });
    const user = { username: foundUser.name, admin: decoded.data.admin };
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: { message: err } });
  }
};

module.exports = validateJWT;
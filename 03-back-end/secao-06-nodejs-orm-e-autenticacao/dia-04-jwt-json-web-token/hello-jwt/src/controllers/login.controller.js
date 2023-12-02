const express = require('express');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const router = express.Router();

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const loginSchema = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
});

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });

  if (error) return res.status(400).json({ message: error.message });

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const data = { username, id: Math.floor(Math.random() * 4) + 1, admin: false };
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    data.admin = true; 
    data.id = 0; 
  }

  const token = jwt.sign({ data }, secret, jwtConfig);

  return res.status(200).json({ token });
});

module.exports = router;
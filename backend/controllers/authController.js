// controllers/authController.js
const User = require('../models/userModel');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  User.createUser(name, email, password, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'User registered', userId: result.insertId });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', userId: results[0].user_id });
  });
};

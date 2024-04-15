const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created'});
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Use User model to find one document
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials, please try again.' });
    }

    const isMatch = await bcrypt.compare(password, user.password); // Assuming you're using bcrypt for password comparison
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid login credentials, please try again.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Assuming you're using jsonwebtoken for generating tokens
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred while processing your request. Please try again later.' });
  }
});

module.exports = router;
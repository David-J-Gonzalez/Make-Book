const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

// Registration Endpoint
router.post('/register', async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const newUser = await user.save();
        res.status(201).json({
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error('Error on /register:', error);
        res.status(500).json({ message: error.message });
    }
});

// Login Endpoint
router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({
          message: "Login successful",
          token,
          user: { id: user._id, username: user.username, email: user.email }
      });
  } catch (error) {
      console.error('Error on /login:', error);
      res.status(500).json({ message: "Server error", error: error.message });
  }
});

//User info
router.get('/session', authenticateToken, async (req, res) => {
  try {
      const user = await User.findById(req.userId).select('-password');
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
  } catch (error) {
      console.error('Error on /user:', error);
      res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
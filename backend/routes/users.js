
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      // Check if user already exists
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
      console.error('Error on /register:', error); // Detailed logging
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;

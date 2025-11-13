const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../models/User");
//const bodyParser = require('body-parser');
//const jwt = require('jsonwebtoken');
const router = express.Router();
dotenv.config();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Log in to account
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: JohnDoe
 *               password:
 *                 type: string
 *                 example: 123password123
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: client1234token
 */
router.post("/api/login", async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username: username});
    if(!user) return res.status(400).json({message: "Invalid username"});
    console.log(password);
    console.log(user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: "Incorrect password"});

    const token = jwt.sign(
      {userId: user._id, username: user.username}, 
      process.env.JWT_SECRET, 
      {expiresIn: "24h"}
    );
    res.json({ token, user: { id: user._id, username: user.username}});
  } catch (err){
    res.status(500).json({ message: "Login Failed", error: err.message});
  }
});

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Log out of account
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       401:
 *         description: Unauthorized
 */
router.post("/api/logout", (req, res) => {
  res.status(200);
});

module.exports = router;

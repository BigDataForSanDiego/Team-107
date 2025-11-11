const express = require("express");
const router = express.Router();

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
 *                 clientId:
 *                   type: integer
 *                   example: 1234
 */
router.post("/api/login", (req, res) => {
  res.json({ token: "client1234token" });
});


module.exports = router;
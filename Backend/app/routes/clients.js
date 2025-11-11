const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Register Client account
 *     tags: [Clients]
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
 *         description: Successfully created Client
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientId:
 *                   type: integer
 *                   example: 1234
 */
router.post("/api/clients", (req, res) => {
  res.json({ clientId: 1234 });
});

module.exports = router;

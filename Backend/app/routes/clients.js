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

/**
 * @swagger
 * /api/clients/me:
 *   delete:
 *     summary: Delete Client account
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully deleted Client
 *       401:
 *         description: Unauthorized
 */
router.delete("/api/clients/me", (req, res) => {
  res.sendStatus(200);
});

/**
 * @swagger
 * /api/clients/me:
 *   get:
 *     summary: Get Client's dashboard
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Got Client's dashboard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dashboard:
 *                   type: string
 *                   example: placeholder for the dashboard object
 *       401:
 *         description: Unauthorized
 */
router.get("/api/clients/me", (req, res) => {
  res.json({ dashboard: "placeholder for the dashboard object" });
});

module.exports = router;

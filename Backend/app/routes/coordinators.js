const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/coordinators:
 *   post:
 *     summary: Register Coordinator account
 *     tags: [Coordinators]
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
 *                 example: JaneDoe
 *               password:
 *                 type: string
 *                 example: 456password456
 *     responses:
 *       200:
 *         description: Successfully created Coordinator
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 coordinatorId:
 *                   type: integer
 *                   example: 5678
 */
router.post("/api/coordinators", (req, res) => {
  res.json({ coordinatorId: 5678 });
});

/**
 * @swagger
 * /api/coordinators/me:
 *   delete:
 *     summary: Delete Coordinator account
 *     tags: [Coordinators]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully deleted Coordinator
 *       401:
 *         description: Unauthorized
 */
router.delete("/api/coordinators/me", (req, res) => {
  res.sendStatus(401);
});

module.exports = router;

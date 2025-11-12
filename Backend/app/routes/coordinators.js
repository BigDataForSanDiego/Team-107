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
 *       201:
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
  res.status(201).json({ coordinatorId: 5678 });
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
  res.sendStatus(204);
});

/**
 * @swagger
 * /api/coordinators/{coordinatorId}/contact:
 *   get:
 *     summary: Contact Client's Coordinator by ID
 *     tags: [Coordinators]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: coordinatorId
 *         in: path
 *         required: true
 *         description: Numeric ID of Coordinator
 *         schema:
 *           type: integer
 *           example: 5678
 *     responses:
 *       200:
 *         description: Contacted Client's coordinator
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 contact:
 *                   type: string
 *                   example: "123-456-7890"
 *       401:
 *         description: Unauthorized
 */
router.get("/api/coordinators/:coordinatorId/contact", (req, res) => {
  const { coordinatorId } = req.params;
  res.json({ contact: "123-456-7890" });
});

module.exports = router;

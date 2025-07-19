const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const taskRoutes = require('./todo');

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(taskRoutes);

/**
 * @swagger
 * /:
 *   get:
 *     summary: API status
 *     responses:
 *       200:
 *         description: Api is running!
 */
router.get("/", async (req, res) => {
    res.status(200).json({ message: 'Api is running!'});
});

module.exports = router;

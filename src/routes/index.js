const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const taskRoutes = require('./todo');

const router = express.Router();

/**
 * @openapi
 * /:
 *   get:
 *     summary: API status
 *     responses:
 *       200:
 *         description: Api is running!
 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Api is running!' });
});

// Use explicit prefixes (recommended)
router.use('/login', authRoutes);
router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;

const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const taskRoutes = require('./tasks');

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(taskRoutes);

router.get("/", async (res) => {
    res.status(200).send('Api is running!');
});

module.exports = router;
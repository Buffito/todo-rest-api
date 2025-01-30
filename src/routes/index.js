const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const taskRoutes = require('./tasks');

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(taskRoutes);

router.get("/", async (req, res) => {
    //res.render('login.ejs');
});

module.exports = router;
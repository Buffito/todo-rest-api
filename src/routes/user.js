const express = require('express');
const { renderCreateUserPage } = require('../controllers/userController');

const router = express.Router();

router.get('/create', renderCreateUserPage);

module.exports = router;
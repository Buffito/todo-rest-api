const authService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        await authService.login(req, res);
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err });
    }
};
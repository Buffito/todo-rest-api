const authService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        await authService.login(req.body);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err });
      }
};
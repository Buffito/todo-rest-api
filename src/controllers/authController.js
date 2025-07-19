const authService = require('../services/authService');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

exports.login = async (req, res) => {
    try {
        const user = await authService.validateUser(req.body); 
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err });
    }
};
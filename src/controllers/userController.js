const bcrypt = require('bcrypt');
const validator = require('email-validator');
const user = require('../models/user');

const register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        if (!validator.validate(email)) {
           res.status(401).json({ message: 'Invalid Email' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const registerUser = new user({ username, email, password: hashedPassword });
        await registerUser.save();
        
        res.status(200).json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    register
};
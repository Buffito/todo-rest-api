const bcrypt = require('bcrypt');
const validator = require('email-validator');
const user = require('../models/user');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const authUser = await user.findOne({ email });
        if (authUser) {
            const isPasswordValid = await bcrypt.compare(password, authUser.password);
            if (isPasswordValid) {
                loggedUser = authUser.username;
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Invalid credentials');
            }
        } else {
            res.status(404).send('User not found!');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};


module.exports = {
    login
};
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

const register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        if (!validator.validate(email)) {
           res.status(401).send('Invalid Email');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const registerUser = new user({ username, email, password: hashedPassword });
        await registerUser.save();
        
        res.status(200).send('User created successfully!');
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    login,
    register
};
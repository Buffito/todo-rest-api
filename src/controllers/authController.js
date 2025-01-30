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
                //renderTasks(res, '');
            } else {
                //renderCreateUserEJS(res, 'Invalid password!');
            }
        } else {
            //renderCreateUserEJS(res, 'User not found!');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        if (!validator.validate(email)) {
           // return renderCreateUserEJS(res, 'Email was not valid!');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const registerUser = new user({ username, email, password: hashedPassword });
        await registerUser.save();
        res.redirect('/auth'); 
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    login,
    register
};
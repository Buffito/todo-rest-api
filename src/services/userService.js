const User = require('../models/user');
const bcrypt = require('bcrypt');
const validator = require('email-validator');

class userService {
    async getAllUsers() {
        return await User.find();
    }

    async getUserById(id) {
        return await User.findById(id); 
    }

    async getUserByEmail(email) {
        return await User.findOne({
            email: email
        }); 
    }

    async createUser(data) {
        const { username, email, password } = data;

        if (!validator.validate(email)) {
            return { message: 'Invalid Email' };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        return await newUser.save();
    }

    async updateUserById(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUserById(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new userService();
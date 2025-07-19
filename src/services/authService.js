const bcrypt = require('bcrypt');
const user = require('../models/user');

class AuthService {
    async validateUser({ email, password }) {
        const authUser = await user.findOne({ email });
        if (!authUser) return null;

        const isPasswordValid = await bcrypt.compare(password, authUser.password);
        if (!isPasswordValid) return null;

        return authUser;
    }
}

module.exports = new AuthService();
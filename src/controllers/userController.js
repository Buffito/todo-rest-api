const userService = require('../services/userService');

// GET all users
exports.getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
};

// POST a new user
exports.createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).send(newUser);
};

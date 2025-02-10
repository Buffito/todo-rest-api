const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// GET all users
router.get('/users', async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
});

// GET a user by id
router.get('/users/:id', async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).send(user);
});

// POST a new user
router.post('/users', async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).send(newUser);
});

// PUT update a user by id
router.put('/users/:id', async (req, res) => {
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    res.status(200).send(updatedUser);
});

// DELETE a user by id
router.delete('/users/:id', async (req, res) => {
    const deletedUser = await userService.deleteUserById(req.params.id);
    res.status(200).send(deletedUser);
});

module.exports = router;
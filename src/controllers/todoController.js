const toDoTask = require('../models/toDoTask');

const addTask = async (req, res) => {
    const { content } = req.body;
    const creator = loggedUser;
    const newToDo = new toDoTask({ content, creator });

    try {
        await newToDo.save();
        res.status(200).send('Task created successfully!');
    } catch (err) {
        res.status(500).send(err);
    }
};

const editTask = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        await toDoTask.findByIdAndUpdate(id, { content });
        res.status(200).send('Task updated successfully!');
    } catch (err) {
        res.status(500).send(err);
    }
};

const removeTask = async (req, res) => {
    const { id } = req.params;
    try {
        await toDoTask.findByIdAndRemove(id);
        res.status(200).send('Task removed successfully!');
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    addTask,
    editTask,
    removeTask
};